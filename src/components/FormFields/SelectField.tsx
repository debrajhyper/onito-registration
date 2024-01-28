import React from 'react';
// import PropTypes from 'prop-types';
// import { at } from 'lodash';
// import { useField } from 'formik';
import {
    InputLabel,
    FormControl,
    Select,
    MenuItem,
    FormHelperText,
} from '@mui/material';
import { Controller, useForm, useFormContext } from "react-hook-form";
export function SelectField({ name, label, data, type, ...rest }: any) {
    const { control, formState: { errors } } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            rules={{ required: true }}
            // {...rest}
            render={({ field, fieldState: { invalid, error } }) => (
                <FormControl
                    error={invalid}
                    // helperText={invalid ? error?.message : ""}
                    {...rest}
                >
                    <InputLabel htmlFor={name}>{label}</InputLabel>
                    <Select
                        type={type}
                        label={label}
                        inputProps={{ id: name }}
                        {...field}
                    >
                        {data.map((item: any, index: React.Key | null | undefined) => (
                            <MenuItem key={index} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </Select>
                    {
                        invalid && error ? <FormHelperText>{error?.message}</FormHelperText> : null
                    }
                </FormControl>
            )}
        />
    );
}

// SelectField.defaultProps = {
//     data: [],
// };

// SelectField.propTypes = {
//     data: PropTypes.array.isRequired,
// };
