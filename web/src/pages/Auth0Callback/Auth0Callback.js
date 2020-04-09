import React, { useEffect } from 'react'
import { routes } from '@redwoodjs/router'
import { useAuth } from 'react-use-auth'
import AppLayout from 'src/layouts/AppLayout'
import Loading from 'src/components/Loading'

const Auth0CallbackPage = () => {
  const { handleAuthentication } = useAuth()
  useEffect(() => {
    handleAuthentication({ postLoginRoute: routes.home() })
  }, [])

  // TODO: Show spinner
  return (
    <AppLayout>
      <Loading />
      This is the auth callback page, you should be redirected immediately.
    </AppLayout>
  )
}

export default Auth0CallbackPage
