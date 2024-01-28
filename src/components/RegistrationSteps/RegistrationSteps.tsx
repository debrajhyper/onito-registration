import React, { useState, useEffect } from 'react';
import {
    Stepper,
    Step,
    StepLabel,
    Button,
    Typography,
    CircularProgress,
    Stack,
    Box,
} from '@mui/material';
// import { Formik, Form } from 'formik';
import { FormProvider, useForm } from "react-hook-form";
import { AddressDetails, PersonalDetails } from './Forms'
import { yupResolver } from "@hookform/resolvers/yup";

// import validationSchema from './FormModel/validationSchema';
// import checkoutFormModel from './FormModel/checkoutFormModel';
// import formInitialValues from './FormModel/formInitialValues';
import { FormInitialValues, FormModel, yupValidation } from './FormModal';
import { useDispatch } from 'react-redux';
import { addUserDetails } from 'src/services';
import { FormSuccess } from './Success';

//import useStyles from "./styles";

const steps = ['Personal Details', 'Address Details'];
const { personalDetails, addressDetails } = FormModel;

function _renderStepContent(step: number) {
    switch (step) {
        case 0:
            return <PersonalDetails heading={steps[0]} personalDetails={personalDetails} />;
        case 1:
            return <AddressDetails heading={steps[1]} addressDetails={addressDetails} />;
        default:
            return <div>Not Found</div>;
    }
}



export default function RegistrationSteps() {
    const [activeStep, setActiveStep] = useState(1);
    const dispatch = useDispatch();
    const { register, formState: { errors }, reset } = useForm<PersonalDetails & AddressDetails>({
        // resolver: yupResolver(schema)
    });
    const currentValidationSchema = yupValidation[activeStep];
    const methods = useForm({
        shouldUnregister: false,
        defaultValues: FormInitialValues,
        resolver: yupResolver(currentValidationSchema),
        mode: "onChange"
    });
    const { handleSubmit, trigger } = methods;


    const isLastStep = activeStep === steps.length - 1;

    function _sleep(ms: number | undefined) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function _submitForm(values: any, actions: { setSubmitting: (arg0: boolean) => void; }) {
        await _sleep(1000);
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);

        setActiveStep(activeStep + 1);
    }

    // function handleSubmit(values: any, actions: { setTouched?: any; setSubmitting: any; }) {
    //     if (isLastStep) {
    //         _submitForm(values, actions);
    //     } else {
    //         setActiveStep(activeStep + 1);
    //         actions.setTouched({});
    //         actions.setSubmitting(false);
    //     }
    // }

    function _handleBack() {
        // setActiveStep(activeStep - 1);
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

    // const onSubmit = (data: any) => console.log(data)
    const onSubmitHandler = async (data: any) => {
        console.log(data);
        const isStepValid = await trigger();
        if (isStepValid) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
        if (isLastStep) {
            dispatch(addUserDetails(data))
            // reset()
        }
        // reset();
    };

    useEffect(() => {
        let timer: number;
        if (activeStep === steps?.length) {
            timer = setTimeout(() => {
                setActiveStep(1);
            }, 6000);
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
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <React.Fragment>
                {/* {activeStep === steps.length ? (
                    <CheckoutSuccess />
                ) : (
                    <Formik
                        initialValues={formInitialValues}
                        validationSchema={currentValidationSchema}
                        onSubmit={_handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            
                        )}
                    </Formik>
                )} */}
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight='45vh'>
                    {
                        activeStep === steps.length
                            ? (
                                <FormSuccess />
                            )
                            : (
                                <FormProvider {...methods}>
                                    <form onSubmit={handleSubmit(onSubmitHandler)}>
                                        {_renderStepContent(activeStep)}
                                        <Stack direction="row" justifyContent="flex-end" spacing={2} p={2} pr={0}>
                                            {activeStep !== 0 && (
                                                <Button onClick={_handleBack}>Back</Button>
                                            )}
                                            <div>
                                                <Button
                                                    disabled={false}
                                                    type="submit"
                                                    variant="contained"
                                                    color="primary"
                                                // disabled={methods.formState.isSubmitting}
                                                >
                                                    {isLastStep ? 'Submit' : 'Next'}
                                                </Button>
                                                {/* {isSubmitting && <CircularProgress size={24} />} */}
                                            </div>
                                        </Stack>
                                    </form>
                                </FormProvider>
                            )
                    }
                </Box>
                {/* </Form> */}
            </React.Fragment>
        </Box>
    );
}
