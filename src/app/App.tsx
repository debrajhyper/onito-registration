import { Layout } from '@View/index';
import { RegistrationSteps, UserDetailsTable } from '@Components/index';

export default function App() {
  return (
    <Layout>
      <RegistrationSteps />
      <UserDetailsTable />
    </Layout>
  );
};