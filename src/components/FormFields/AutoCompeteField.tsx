import { useEffect, useState, useMemo, SyntheticEvent, SetStateAction } from 'react';
import { Controller, useFormContext } from "react-hook-form";
import { apiFetch } from '@Api/index';
import { InputType, CountryType } from './types';
import { EMPTY_STRING, NOT_FOUND_INPUT, SEARCH_INPUT } from '@Constants/index';
import { debounce } from '@mui/material/utils';
import { TextField, Grid, Autocomplete, Typography, CircularProgress } from '@mui/material';

export function AutocompleteField({ name, label, type, ...rest }: InputType) {
    const [value, setValue] = useState<CountryType | null>(null);
    const [inputValue, setInputValue] = useState<string>(EMPTY_STRING);
    const [options, setOptions] = useState<CountryType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const { control } = useFormContext();

    const fetchCountries = useMemo(
        () =>
            debounce(
                async (newInputValue, callback) => {
                    try {
                        const countries = await apiFetch(newInputValue);
                        callback(countries);
                    } catch (error) {
                        callback([]);
                    } finally {
                        setLoading(false)
                    }
                },
                400
            ),
        []
    );

    useEffect(() => {
        let active = true;
        if (inputValue === EMPTY_STRING) {
            setOptions(value ? [value] : []);
            return undefined;
        }
        setLoading(true);
        fetchCountries(inputValue, (results: any) => {
            if (active) {
                setOptions(value ? [...results] : results);
            }
        });

        return () => {
            active = false;
        };
    }, [value, inputValue, fetchCountries]);

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange }, fieldState: { invalid, error } }) => (
                <Autocomplete
                    getOptionLabel={(option: CountryType | string) =>
                        typeof option === 'string' ? option : option?.name
                    }
                    isOptionEqualToValue={(option: CountryType, value: CountryType) =>
                        value === undefined || value === null || option?.name === value?.name
                    }
                    filterOptions={(x: CountryType[]) => x}
                    options={options}
                    loading={loading}
                    autoComplete
                    includeInputInList
                    filterSelectedOptions
                    value={value}
                    noOptionsText={inputValue === EMPTY_STRING ? SEARCH_INPUT : options?.length === 0 ? NOT_FOUND_INPUT : null}
                    onChange={(_event: SyntheticEvent<Element, Event>, newValue: CountryType | null) => {
                        setOptions(newValue ? [newValue, ...options] : options);
                        setValue(newValue);
                        onChange(newValue?.name);
                    }}
                    onInputChange={(_event: SyntheticEvent<Element, Event>, newInputValue: SetStateAction<string>) => {
                        setInputValue(newInputValue);
                    }}
                    renderInput={(params) => (
                        <TextField
                            label={label}
                            type={type}
                            error={invalid}
                            helperText={invalid ? error?.message : EMPTY_STRING}
                            {...params}
                            {...rest}
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <>
                                        {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                        {params?.InputProps?.endAdornment}
                                    </>
                                ),
                            }}
                        />
                    )}
                    renderOption={(props, option: CountryType) => {
                        const { name, region, flag } = option;
                        return (
                            <Grid component='li' container alignItems="center" key={name} {...props}>
                                <Grid item sx={{ display: 'flex', width: 44 }}>
                                    <img
                                        loading="lazy"
                                        width="30"
                                        srcSet={flag}
                                        src={flag}
                                        alt={`${name}_flag`}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    sx={{
                                        wordWrap: 'break-word',
                                        wordBreak: 'break-all',
                                        lineHeight: '1',
                                    }}
                                >
                                    <Typography>
                                        {name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {region}
                                    </Typography>
                                </Grid>
                            </Grid>
                        );
                    }}
                />
            )}
        />
    );
};