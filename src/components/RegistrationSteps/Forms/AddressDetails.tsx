import React from 'react';
import { Typography, FormControl, InputLabel, Select, MenuItem, Autocomplete } from '@mui/material';
// import { InputField, CheckboxField, SelectField } from '../../FormFields';
import { AutocompleteField, InputField, SelectField } from '@Components/FormFields';
import Grid from '@mui/material/Unstable_Grid2';

export function AddressDetails({ heading, addressDetails: { address, state, city, country, pinCode } }: any) {
    return (
        <React.Fragment>
            <Typography variant="h6" p={1}>
                {heading}
            </Typography>
            <Grid container spacing={3}>
                <Grid xs={12} sm={6} md={4}>
                    <InputField name={address.name} label={address.label} type={address.type} fullWidth />
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <InputField name={state.name} label={state.label} type={state.type} fullWidth />
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <InputField name={city.name} label={city.label} type={city.type} fullWidth />
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <AutocompleteField name={country.name} label={country.label} type={country.type} fullWidth />
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <InputField name={pinCode.name} label={pinCode.label} type={pinCode.type} fullWidth />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
