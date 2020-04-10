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
import Loading from 'src/components/Loading'
import { useAuth } from 'src/policies/PersistedUserPolicy'

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
    loading,
    error,
    isAuthenticated,
    user,
    login,
    logout,
    authResult,
  } = useAuth()

  const { t } = useTranslation()

  if (loading) return <Loading />
  if (error) {
    console.log('[Login] error: ', error)
    return
  }

  console.log('[Login] authResult: ', authResult)
  console.log('[Login] user: ', user)

  if (isAuthenticated()) {
    return (
      <UserInfo>
        <Avatar
          src={user.picture}
          alt={user.firstName}
          title={user.firstName}
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
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) return navigate(routes.root())

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

const HomeLayout = ({ children }) => {
  return (
    <App>
      <Layout>{children}</Layout>
    </App>
  )
}

export default HomeLayout
