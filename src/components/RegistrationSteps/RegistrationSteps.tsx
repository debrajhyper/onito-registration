import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { NotFound } from './NotFound';
import { FormSuccess } from './Success';
import { addUserDetails } from 'src/services';
import { AddressDetails, PersonalDetails } from './Forms'
import { FormInitialValues, FormModel, yupValidation } from './FormModal';
import { STEPPER_FIRST_STEP, STEPPER_SECOND_STEP } from '@Constants/index';
import { Stepper, Step, StepLabel, Button, Stack, Box } from '@mui/material';

const steps = [STEPPER_FIRST_STEP, STEPPER_SECOND_STEP];
const { personalDetails, addressDetails } = FormModel;

function renderStepContent(step: number) {
    switch (step) {
        case 0:
            return <PersonalDetails heading={steps[0]} personalDetails={personalDetails} />;
        case 1:
            return <AddressDetails heading={steps[1]} addressDetails={addressDetails} />;
        default:
            return <NotFound />;
    }
}

export function RegistrationSteps() {
    const [activeStep, setActiveStep] = useState<number>(0);
    const dispatch = useDispatch();
    const currentValidationSchema = yupValidation[activeStep];
    const methods = useForm({
        shouldUnregister: false,
        defaultValues: FormInitialValues,
        resolver: yupResolver(currentValidationSchema),
        mode: "onChange"
    });
    const { handleSubmit, trigger, reset } = methods;
    const isLastStep = activeStep === steps?.length - 1;

    function handleBack() {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    async function onSubmitHandler(data: HandleSubmit) {
        const isStepValid = await trigger();
        if (isStepValid) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        };
        if (isLastStep) {
            dispatch(addUserDetails(data));
            reset();
        };
    };

    useEffect(() => {
        let timer: number;
        if (activeStep === steps?.length) {
            timer = setTimeout(() => {
                setActiveStep(0);
            }, 5000);
        }

        return () => clearTimeout(timer);
    }, [activeStep, steps?.length]);

    return (
        <Box px={{
            xs: 2,
            sm: 5,
            md: 14,
            lg: 18,
            xl: 0
        }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label) => (
                    <Step key={label} sx={{
                        "& .Mui-completed": {
                            "&.MuiStepIcon-root": {
                                color: "secondary.main",
                            },
                        }
                    }}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight='45vh'>
                    {
                        activeStep === steps.length
                            ? (
                                <FormSuccess />
                            )
                            : (
                                <FormProvider {...methods}>
                                    <form onSubmit={handleSubmit(onSubmitHandler)}>
                                        {renderStepContent(activeStep)}
                                        <Stack direction="row" justifyContent="flex-end" spacing={2} p={2} pr={0}>
                                            {activeStep !== 0 && (
                                                <Button onClick={handleBack}>Back</Button>
                                            )}
                                            <div>
                                                <Button
                                                    disabled={false}
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                >
                                                    {isLastStep ? 'Submit' : 'Next'}
                                                </Button>
                                            </div>
                                        </Stack>
                                    </form>
                                </FormProvider>
                            )
                    }
                </Box>
            </>
        </Box>
    );
};