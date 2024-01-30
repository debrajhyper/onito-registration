import { Box, CircularProgress } from '@mui/material';

export function CircularLoader() {
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight='40vh'>
            <CircularProgress size={30} />
        </Box>
    );
};