import { TextField } from '@mui/material';
import { Controller, useForm, useFormContext } from "react-hook-form";
import { FormInitialValues } from '../RegistrationSteps/FormModal/FormInitialValues';
import { FormModel } from '../RegistrationSteps/FormModal';
import { PersonalDetails } from '../RegistrationSteps/Forms/PersonalDetails';
import './style.css';

export function InputField({ name, label, type, ...rest }: any) {
    // const { errorText, ...rest } = props;
    const { control, formState: { errors }, watch } = useFormContext();
    // const [field, meta] = useField(props);

    // function _renderHelperText() {
    //     // const [touched, error] = at(meta, 'touched', 'error');
    //     if (touched && error) {
    //         return error;
    //     }
    // }

    const selectedValue = watch('govtIssuedIDType');

    return (
        // <TextField
        //     type="text"
        //     // error={meta.touched && meta.error && true}
        //     // helperText={_renderHelperText()}
        //     // {...field}
        //     {...rest}
        // />
        <Controller
            name={name}
            control={control}
            rules={{ required: true }}
            // {...rest}
            render={({ field, fieldState: { invalid, error } }) => (
                <TextField
                    label={label}
                    type={type}
                    error={invalid}
                    helperText={invalid ? error?.message : ""}
                    disabled={name === 'govtIssuedId' && !FormModel.personalDetails.govtIssuedIDType.oneOfSelect.includes(selectedValue)}
                    {...field}
                    {...rest}
                />
            )}
        />
    );
}
