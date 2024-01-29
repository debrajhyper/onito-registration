import { lazy, Suspense } from 'react';
import { Layout } from '@View/index.ts';
import { ErrorBoundary } from './ErrorBoundary';
import { Box, CircularProgress } from '@mui/material';

const RegistrationSteps = lazy(() => import('@Components/RegistrationSteps'));
const UserDetailsTable = lazy(() => import('@Components/Datatable'));

export default function App() {
  return (
    <Layout>
      <ErrorBoundary>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight='50vh'>
          <Suspense fallback={<CircularProgress size={30} />}>
            <RegistrationSteps />
          </Suspense>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight='30vh'>
          <Suspense fallback={<CircularProgress size={30} />}>
            <UserDetailsTable />
          </Suspense>
        </Box>
      </ErrorBoundary>
    </Layout >
  );
};