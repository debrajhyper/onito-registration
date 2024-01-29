import { Controller, useFormContext } from "react-hook-form";
import './style.css';
import { InputType } from "./types";
import { FormModel } from '../RegistrationSteps/FormModal';
import { COLUMNS_GOVT_ISSUED_ID_DATA, COLUMNS_GOVT_ISSUED_ID_TYPE_DATA, EMPTY_STRING } from "@Constants/index";
import { TextField } from '@mui/material';

export function InputField({ name, label, type, ...rest }: InputType) {
    const { control, watch } = useFormContext();
    const selectedValue = watch(COLUMNS_GOVT_ISSUED_ID_TYPE_DATA);

    return (
        <Controller
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState: { invalid, error } }) => (
                <TextField
                    id={name}
                    label={label}
                    type={type || 'text'}
                    error={invalid}
                    helperText={invalid ? error?.message : EMPTY_STRING}
                    disabled={name === COLUMNS_GOVT_ISSUED_ID_DATA && !FormModel?.personalDetails?.govtIssuedIDType?.oneOfSelect?.includes(selectedValue)}
                    {...field}
                    {...rest}
                />
            )}
        />
    );
};