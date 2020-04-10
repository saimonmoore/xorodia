import React, { useContext } from 'react'
import {
  Link,
  routes,
  navigate,
  usePageLoadingContext,
} from '@redwoodjs/router'
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import { useTranslation } from 'react-i18next'
import App from 'src/components/App'
import { AuthContext } from 'src/contexts/AuthContext'
import Loading from 'src/components/Loading'

const HomeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: ${themeGet('space.4')};
  margin-right: ${themeGet('space.4')};
  font-size: ${themeGet('fontSizes.4')};
  align-items: center;
  min-height: 150px;
  color: ${themeGet('colors.lime')};
`

const Button = styled.button`
  ${themeGet('buttons.primary')}
  height: ${themeGet('lineHeights.5')};
  cursor: pointer;
`

const Avatar = styled.img`
  width: 55px;
  height: 55px;
  border-radius: ${themeGet('radii.rounded')};
  border: ${themeGet('borders.active')};
`
const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 170px;
`

const Login = () => {
  const {
    data: { loading, error, isAuthenticated, currentUser, loginFn, logoutFn },
  } = useContext(AuthContext)

  const { t } = useTranslation()

  if (loading) return <Loading />
  if (error) {
    console.log('[Login] error: ', error)
    return
  }

  if (isAuthenticated()) {
    return (
      <UserInfo>
        <Avatar
          src={currentUser.picture}
          alt={currentUser.firstName}
          title={currentUser.firstName}
        />
        <Button onClick={logoutFn}>{t('LOGOUT_BUTTON_LABEL')}</Button>
      </UserInfo>
    )
  } else {
    return <Button onClick={loginFn}>{t('LOGIN_BUTTON_LABEL')}</Button>
  }
}

const Layout = ({ children }) => {
  const { loading } = usePageLoadingContext()
  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <HomeHeader>
          <Link to={routes.about()}>About</Link>
          <span>Xorodia</span>
          <Login />
        </HomeHeader>
      )}
      <main>{children}</main>
    </>
  )
}

const AppLayout = ({ children }) => {
  return (
    <App>
      <Layout>{children}</Layout>
    </App>
  )
}

export default AppLayout
