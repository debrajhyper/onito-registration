import { ReactNode, useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error';

export function ErrorBoundary({ children }: { children: ReactNode }) {
    const [hasError, setHasError] = useState<boolean>(false);

    useEffect(() => {
        const componentDidCatch = (errorEvent: Object) => {
            // console.error(errorEvent.error, errorEvent.errorInfo);
            setHasError(true);
        };

        window.addEventListener('error', componentDidCatch);

        return () => {
            window.removeEventListener('error', componentDidCatch);
        };
    }, []);

    if (hasError) {
        return (
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight='80vh'>
                <ErrorIcon color="error" sx={{ fontSize: "5em" }} />
                <Typography variant="h4" gutterBottom>
                    Oops!
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    There's an error, Try reloading the page.
                </Typography>
            </Box>
        );
    };

    return children;
};