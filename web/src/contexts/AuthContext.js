import React from 'react'

export const AuthContext = React.createContext()
export const AuthContextConsumer = AuthContext.Consumer

const AuthContextProvider = ({
  currentUser,
  authUser,
  isAuthenticated,
  isAuthenticating,
  loginFn,
  logoutFn,
  authResult,
  children,
}) => {
  return (
    <AuthContext.Provider
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
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
