import { ThemeProvider, Container, CssBaseline, Box, Stack } from '@mui/material';

import { theme } from './style';
import { LayoutProps } from './types';

export function Layout({ children }: LayoutProps) {
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
}