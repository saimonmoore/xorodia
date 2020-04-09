import React from 'react'
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import HomeLayout from 'src/layouts/HomeLayout'
import { routes, navigate } from '@redwoodjs/router'

import choirAvatar from './assets/choirAvatar.png'
import directorAvatar from './assets/directorAvatar.png'

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
  <ImageButton
    src={choirAvatar}
    alt="Singer"
    title="Singer"
    onClick={onClick}
  />
)

const DirectorImage = ({ onClick }) => (
  <ImageButton
    alt="Director"
    title="Director"
    src={directorAvatar}
    onClick={onClick}
  />
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${themeGet('colors.lime')};
`

const ChoirLogin = () => {
  return (
    <Wrapper>
      <h5>Are you a singer?</h5>
      <ChoirImage onClick={() => navigate(routes.choir())} />
    </Wrapper>
  )
}

const DirectorLogin = () => {
  return (
    <Wrapper>
      <h5>or a Director?</h5>
      <DirectorImage onClick={() => navigate(routes.director())} />
    </Wrapper>
  )
}

const HomePage = () => {
  return (
    <HomeLayout>
      <HomeWrapper>
        <ChoirLogin />
        <DirectorLogin />
      </HomeWrapper>
    </HomeLayout>
  )
}

export default HomePage
