import { AuthProvider } from './providers/AuthProvider'
import { Dashboard } from './components/layout/Dashboard'

export default function App() {
  return (
    <AuthProvider>
      <Dashboard />
    </AuthProvider>
  )
}
