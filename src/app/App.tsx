import { lazy, Suspense } from 'react';
import { Layout } from '@View/index.ts';

const ErrorBoundary = lazy(() => import('@Components/Error'));
const CircularLoader = lazy(() => import('@Components/Loader'));
const UserDetailsTable = lazy(() => import('@Components/Datatable'));
const RegistrationSteps = lazy(() => import('@Components/RegistrationSteps'));

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