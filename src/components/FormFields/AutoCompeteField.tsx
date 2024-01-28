import React, { useState } from 'react';
import { TextField, Grid, Autocomplete, Typography, CircularProgress } from '@mui/material';
import { debounce } from '@mui/material/utils';
import { Controller, useForm, useFormContext } from "react-hook-form";

interface PlaceType {
    name: string;
    region: string;
    flag: string;
}

export function AutocompleteField({ name, label, type, ...rest }: any) {
    const { control, formState: { errors } } = useFormContext();
    const [value, setValue] = useState<PlaceType | null>(null);
    const [inputValue, setInputValue] = useState<string>('');
    const [options, setOptions] = useState<PlaceType[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchCountries = React.useMemo(
        () =>
            debounce(
                async (newInputValue, callback) => {

                    try {
                        const response = await fetch(`https://restcountries.com/v3.1/name/${newInputValue}`);
                        if (!response.ok) throw new Error('Failed to fetch data');
                        const data = await response.json();
                        const countries = data.map((country: { name: { common: any; }; region: any; flags: { svg: any; }; }) => ({
                            name: country.name.common,
                            region: country.region,
                            flag: country.flags.svg
                        }));
                        callback(countries);
                    } catch (error) {
                        console.error('Error fetching data:', error);
                        callback([]);
                    } finally {
                        setLoading(false)
                    }
                },
                400
            ),
        []
    );

    React.useEffect(() => {
        let active = true;

        // if (!loading) {
        //     return undefined;
        // }

        if (inputValue === '') {
            setOptions(value ? [value] : []);
            return undefined;
        }

        setLoading(true)

        fetchCountries(inputValue, (results: any) => {
            if (active) {
                setOptions(value ? [...results] : results);
            }
        });

        return () => {
            active = false;
        };
    }, [value, inputValue, fetchCountries]);

    console.log('VALUE -> ', value, inputValue, options);

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange }, fieldState: { invalid, error } }) => (
                <Autocomplete
                    getOptionLabel={(option: any) =>
                        typeof option === 'string' ? option : option?.name
                    }
                    isOptionEqualToValue={(option, value) =>
                        value === undefined || value === "" || option.name === value
                    }
                    filterOptions={(x) => x}
                    options={options}
                    loading={loading}
                    autoComplete
                    includeInputInList
                    filterSelectedOptions
                    value={value}
                    noOptionsText={inputValue === '' ? "Search for your country" : options.length === 0 ? "No Country found!" : null}
                    // noOptionsText="No Country"
                    onChange={(event: any, newValue: any) => {
                        setOptions(newValue ? [newValue, ...options] : options);
                        setValue(newValue);
                        onChange(newValue?.name);
                    }}
                    onInputChange={(event: any, newInputValue: React.SetStateAction<string>) => {
                        setInputValue(newInputValue);
                    }}
                    renderInput={(params) => (
                        <TextField
                            label={label}
                            type={type}
                            error={invalid}
                            helperText={invalid ? error?.message : ""}
                            {...params}
                            // {...field}
                            {...rest}
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <React.Fragment>
                                        {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                        {params.InputProps.endAdornment}
                                    </React.Fragment>
                                ),
                            }}
                        />
                    )}
                    renderOption={(props, option: any) => {
                        return (
                            <Grid component='li' container alignItems="center" key={option?.name} {...props}>
                                <Grid item sx={{ display: 'flex', width: 44 }}>
                                    <img
                                        loading="lazy"
                                        width="30"
                                        srcSet={option.flag}
                                        src={option.flag}
                                        alt={`${option.name}_flag`}
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
                                        {option?.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {option?.region}
                                    </Typography>
                                </Grid>
                            </Grid>
                        );
                    }}
                />
            )}
        />

    );
}
