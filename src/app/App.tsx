import { lazy, Suspense } from 'react';
import { Layout } from '@View/index.ts';
import { ErrorBoundary } from './ErrorBoundary';

const RegistrationSteps = lazy(() => import('@Components/RegistrationSteps'));
const UserDetailsTable = lazy(() => import('@Components/Datatable'));
const CircularLoader = lazy(() => import('@Components/Loader'));

export default function App() {
  return (
    <Layout>
      <ErrorBoundary>
        <div>
          <Suspense fallback={<CircularLoader />}>
            <RegistrationSteps />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<CircularLoader />}>
            <UserDetailsTable />
          </Suspense>
        </div>
      </ErrorBoundary>
    </Layout >
  );
};