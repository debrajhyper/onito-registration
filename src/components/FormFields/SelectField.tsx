import { Controller, useFormContext } from "react-hook-form";
import { InputType, SelectOptionsIndex, SelectOptionsItem } from './types';
import { InputLabel, FormControl, Select, MenuItem, FormHelperText } from '@mui/material';

export function SelectField({ name, label, data, type, ...rest }: InputType) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState: { invalid, error } }) => (
                <FormControl
                    error={invalid}
                    {...rest}
                >
                    <InputLabel htmlFor={name}>{label}</InputLabel>
                    <Select
                        type={type}
                        label={label}
                        inputProps={{ id: name }}
                        {...field}
                    >
                        {data.map((item: SelectOptionsItem, index: SelectOptionsIndex) => (
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
};