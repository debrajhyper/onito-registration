import React from 'react';
import { Typography } from '@mui/material';
// import CheckIcon from '@mui/icons-material/CheckIcon';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export function FormSuccess() {
    return (
        <React.Fragment>
            <CheckCircleIcon color="success" sx={{ fontSize: "4em" }} />
            <Typography variant="h5" gutterBottom>
                Success
            </Typography>
            <Typography variant="subtitle1">
                Good job! Thanks for submitting your details.
            </Typography>
        </React.Fragment>
    );
}
