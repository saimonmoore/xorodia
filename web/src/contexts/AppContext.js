import React from 'react'
// import { useAuth } from 'src/policies/PersistedUserPolicy'
// import Loading from 'src/components/Loading'

export const AppContext = React.createContext()
export const AppContextConsumer = AppContext.Consumer

const AppContextProvider = ({
  currentUser,
  authUser,
  isAuthenticated,
  isAuthenticating,
  loginFn,
  logoutFn,
  authResult,
  children,
}) => {
  // const {
  //   loading,
  //   error,
  //   isAuthenticated,
  //   isAuthenticating,
  //   user: currentUser,
  //   login: loginFn,
  //   logout: logoutFn,
  //   authResult,
  // } = useAuth()

  // if (loading) return <Loading />
  // if (error) {
  //   console.log('[AppContextProvider] error: ', error)
  //   return children
  // }

  return (
    <AppContext.Provider
      value={{
        data: {
          currentUser,
          authUser,
          isAuthenticated,
          isAuthenticating,
          loginFn,
          logoutFn,
          authResult,
        },
        actions: {},
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
