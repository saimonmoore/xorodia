import React from 'react'
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import {
  routes,
  navigate,
  Link,
  usePageLoadingContext,
} from '@redwoodjs/router'
import { useAuth } from 'react-use-auth'

import Loading from 'src/components/Loading'

import choirAvatar from './assets/choirAvatar.png'
import directorAvatar from './assets/directorAvatar.png'

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

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  > * {
    &:not(:first-child) {
      margin-left: 150px;
    }
  }
`

const ImageButton = styled.img`
  height: 80px;
  width: 80px;
  cursor: pointer;
  opacity: 0.2;

  &:hover {
    opacity: 1;
  }
`

const ChoirImage = ({ onClick }) => (
  <ImageButton src={choirAvatar} alt="Choir Login" onClick={onClick} />
)

const DirectorImage = ({ onClick }) => (
  <ImageButton alt="Director Login" src={directorAvatar} onClick={onClick} />
)

const ChoirLogin = () => {
  return <ChoirImage onClick={() => navigate(routes.choir())} />
}

const DirectorLogin = () => {
  return <DirectorImage onClick={() => navigate(routes.director())} />
}

const Button = styled.button`
  height: ${themeGet('lineHeights.5')};
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
  min-width: 250px;
`

const Login = () => {
  const { isAuthenticated, user, login, logout, authResult } = useAuth()

  console.log('[useAuth] authResult: ', authResult)

  if (isAuthenticated()) {
    return (
      <UserInfo>
        Welcome {user.nickname}{' '}
        <Avatar src={user.picture} alt={user.name} title={user.name} />
        <Button onClick={logout}>Logout</Button>
      </UserInfo>
    )
  } else {
    return (
      <Button
        onClick={() => {
          login()
        }}
      >
        Login
      </Button>
    )
  }
}

const HomePage = () => {
  const { loading } = usePageLoadingContext()

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <>
          <HomeHeader>
            <Link to={routes.about()}>About</Link>
            <span>Xorodia</span>
            <Login />
          </HomeHeader>
          <HomeWrapper>
            <ChoirLogin />
            <DirectorLogin />
          </HomeWrapper>
        </>
      )}
    </>
  )
}

export default HomePage
