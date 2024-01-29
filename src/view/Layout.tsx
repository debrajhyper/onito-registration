import { Layout } from './types';
import { theme } from './style';
import { ThemeProvider, Container, CssBaseline, Box, Stack } from '@mui/material';

export function Layout({ children }: Layout) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="xl">
                <Box p={4} pb={6} px={1}>
                    <Stack spacing={2}>
                        {children}
                    </Stack>
                </Box>
            </Container>
        </ThemeProvider>
    );
};