import React, { useContext } from 'react'
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import AppLayout from 'src/layouts/AppLayout'
import { routes, navigate } from '@redwoodjs/router'
import { useTranslation } from 'react-i18next'

import { AppContext } from 'src/contexts/AppContext'
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

const ChoirImage = ({ onClick }) => {
  const { t } = useTranslation()

  return (
    <ImageButton
      src={choirAvatar}
      alt={t('HOME_SINGER_BUTTON_TITLE')}
      title={t('HOME_SINGER_BUTTON_TITLE')}
      onClick={onClick}
    />
  )
}

const DirectorImage = ({ onClick, gender }) => {
  const { t } = useTranslation()

  return (
    <ImageButton
      alt={t(
        `HOME_DIRECTOR_BUTTON_TITLE_${gender === 'FEMALE' ? 'FE' : ''}MALE`
      )}
      title={t(
        `HOME_DIRECTOR_BUTTON_TITLE_${gender === 'FEMALE' ? 'FE' : ''}MALE`
      )}
      src={directorAvatar}
      onClick={onClick}
    />
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${themeGet('colors.lime')};
`

const ChoirLogin = () => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <h5>{t(`HOME_SINGER_BUTTON_QUESTION`)}</h5>
      <ChoirImage onClick={() => navigate(routes.choir())} />
    </Wrapper>
  )
}

const DirectorLogin = ({ gender = 'FEMALE' }) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <h5>
        {t(
          `HOME_DIRECTOR_BUTTON_QUESTION_${gender === 'FEMALE' ? 'FE' : ''}MALE`
        )}
      </h5>
      <DirectorImage
        gender={gender}
        onClick={() => navigate(routes.director())}
      />
    </Wrapper>
  )
}

const Home = () => {
  const {
    data: { currentUser },
  } = useContext(AppContext)

  const gender = (currentUser && currentUser.gender) || 'FEMALE'

  return (
    <HomeWrapper>
      <ChoirLogin />
      <DirectorLogin gender={gender} />
    </HomeWrapper>
  )
}

const HomePage = () => {
  return (
    <AppLayout>
      <Home />
    </AppLayout>
  )
}

export default HomePage
