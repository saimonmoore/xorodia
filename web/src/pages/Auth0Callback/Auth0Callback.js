import React, { useEffect } from 'react'
import { routes } from '@redwoodjs/router'
import { useAuth } from 'react-use-auth'
import AppLayout from 'src/layouts/AppLayout'

const Auth0CallbackPage = () => {
  const { handleAuthentication } = useAuth()
  useEffect(() => {
    handleAuthentication({ postLoginRoute: routes.home() })
  }, [])

  // TODO: Persist user in db
  return (
    <AppLayout>
      <h1>
        This is the auth callback page, you should be redirected immediately.
      </h1>
    </AppLayout>
  )
}

export default Auth0CallbackPage
