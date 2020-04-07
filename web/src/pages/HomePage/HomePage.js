import React from 'react'
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import { routes, navigate, usePageLoadingContext } from '@redwoodjs/router'

import Loading from 'src/components/Loading'

import choirAvatar from './assets/choirAvatar.png'
import directorAvatar from './assets/directorAvatar.png'

const HomeHeader = styled.h1`
  display: flex;
  justify-content: center;
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

const HomePage = () => {
  const { loading } = usePageLoadingContext()

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <>
          <HomeHeader>Xorodia</HomeHeader>
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
