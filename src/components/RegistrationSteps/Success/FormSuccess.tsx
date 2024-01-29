import { Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export function FormSuccess() {
    return (
        <>
            <CheckCircleIcon color="success" sx={{ fontSize: "4em" }} />
            <Typography variant="h5" gutterBottom>
                Success
            </Typography>
            <Typography variant="subtitle1">
                Good job! Thanks for submitting your details.
            </Typography>
        </>
    );
};
