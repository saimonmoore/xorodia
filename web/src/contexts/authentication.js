import { navigate } from '@redwoodjs/router'
import { AuthProvider } from 'react-use-auth'

export const withAuth = (element) => (
  <AuthProvider
    navigate={navigate}
    auth0_domain="dev-8pnznm20.eu.auth0.com"
    auth0_client_id="77jh2jfcpuYdRkdbnYPAh44DZgWsmCiw"
  >
    {element}
  </AuthProvider>
)
