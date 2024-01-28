import React from 'react';
import { Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
// import { InputField, CheckboxField, SelectField } from '../../FormFields';
import { InputField, SelectField } from '@Components/FormFields';
import Grid from '@mui/material/Unstable_Grid2';

export function PersonalDetails({ heading, personalDetails: { name, age, sex, mobile, govtIssuedIDType, govtIssuedId } }: any) {
    return (
        <React.Fragment>
            <Typography variant="h6" p={1}>
                {heading}
            </Typography>
            <Grid container spacing={3}>
                <Grid xs={12} sm={6} md={4}>
                    <InputField name={name.name} label={name.label} type={name.type} fullWidth />
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <InputField name={age.name} label={age.label} type={age.type} InputProps={{ inputProps: { min: age.min, max: age.max } }} fullWidth />
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <SelectField name={sex.name} label={sex.label} type={sex.type} data={sex.oneOfSelect} fullWidth />
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <InputField name={mobile.name} label={mobile.label} type={mobile.type} fullWidth />
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <SelectField name={govtIssuedIDType.name} label={govtIssuedIDType.label} type={govtIssuedIDType.type} data={govtIssuedIDType.oneOfSelect} fullWidth />
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <InputField name={govtIssuedId.name} label={govtIssuedId.label} type={govtIssuedId.type} fullWidth />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
