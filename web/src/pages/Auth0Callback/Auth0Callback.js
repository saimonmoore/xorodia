import React, { useEffect } from 'react'
import { routes } from '@redwoodjs/router'
import { useAuth } from 'react-use-auth'
import Loading from 'src/components/Loading'

const Auth0CallbackPage = () => {
  const { handleAuthentication } = useAuth()
  useEffect(() => {
    handleAuthentication({ postLoginRoute: routes.home() })
  }, [])

  return (
    <>
      <Loading />
      This is the auth callback page, you should be redirected immediately.
    </>
  )
}

export default Auth0CallbackPage
