import React, { useState, useContext } from 'react'
import { usePageLoadingContext } from '@redwoodjs/router'
import App from 'src/components/App'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from 'src/components/AppBar'
import SideBar from 'src/components/SideBar'
import SignupWizard from 'src/components/SignupWizard'
import { AuthContext } from 'src/contexts/AuthContext'
import Loading from 'src/components/Loading'

const Layout = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const { loading } = usePageLoadingContext()
  const {
    data: { isAuthenticating, currentUser, authUser, loginFn, logoutFn },
  } = useContext(AuthContext)

  const isAuthenticated = !!Object.keys(authUser).length
  console.log(
    '[AppLayout] isAuthenticating: ',
    isAuthenticating,
    ' currentUser: ',
    currentUser,
    ' authUser: ',
    authUser,
    ' isAuthenticated',
    isAuthenticated
  )

  return (
    <>
      {(isAuthenticating || loading) && <Loading />}
      {!loading && !isAuthenticating && !isAuthenticated && (
        <SignupWizard loginFn={loginFn} />
      )}
      {!loading && !isAuthenticating && isAuthenticated && (
        <>
          <AppBar
            currentUser={currentUser}
            loginFn={loginFn}
            logoutFn={logoutFn}
            toggleSideBarFn={() => setSideBarOpen(!sideBarOpen)}
          />
          <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
          <main>{children}</main>
        </>
      )}
    </>
  )
}

const AppLayout = ({ children }) => {
  return (
    <App>
      <CssBaseline />
      <Layout>{children}</Layout>
    </App>
  )
}

export default AppLayout
