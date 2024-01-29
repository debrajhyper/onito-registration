import { AutocompleteField, InputField } from '@Components/FormFields';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

export function AddressDetails({ heading, addressDetails: { address, state, city, country, pinCode } }: AddressDetailsProps) {
    return (
        <>
            <Typography variant="h6" p={1}>
                {heading}
            </Typography>
            <Grid container spacing={3}>
                <Grid xs={12} sm={6} md={4}>
                    <InputField name={address?.name} label={address?.label} type={address?.type} fullWidth />
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <InputField name={state?.name} label={state?.label} type={state?.type} fullWidth />
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <InputField name={city?.name} label={city?.label} type={city?.type} fullWidth />
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <AutocompleteField name={country?.name} label={country?.label} type={country?.type} fullWidth />
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                    <InputField name={pinCode?.name} label={pinCode?.label} type={pinCode?.type} fullWidth />
                </Grid>
            </Grid>
        </>
    );
};