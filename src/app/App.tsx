import RegistrationSteps from '@Components/RegistrationSteps/RegistrationSteps'
import './App.css'
import { Layout } from '@View/Layout'
import { UserDetailsTable } from '@Components/Datatable'

export default function App() {
  return (
    <Layout>
      <RegistrationSteps />
      <UserDetailsTable/>
    </Layout>
  )
}