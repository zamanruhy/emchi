import './styles/base.css'
import './styles/components.css'
import { Route, Routes } from '@solidjs/router'
import { Layout } from './components/Layout'
import Profile from './pages/Profile'
import Records from './pages/Records'
import Services from './pages/Services'
import Payments from './pages/Payments'
import Analyzes from './pages/Analyzes'

import './styles/utilities.css'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path={'/profile'} element={<Profile />} />
        <Route path={'/records'} element={<Records />} />
        <Route path={'/services'} element={<Services />} />
        <Route path={'/payments'} element={<Payments />} />
        <Route path={'/analyzes'} element={<Analyzes />} />
      </Routes>
    </Layout>
  )
}
