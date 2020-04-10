import React, { useContext } from 'react'
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import { useMutation } from '@redwoodjs/web'
import { useTranslation } from 'react-i18next'
import { Link, routes, navigate } from '@redwoodjs/router'
import { AuthContext } from 'src/contexts/AuthContext'
import Loading from 'src/components/Loading'
import { VOICE_PARTS } from 'src/helpers'

const CREATE_SINGER_MUTATION = gql`
  mutation CreateSingerMutation($input: SingerInput!) {
    createSinger(input: $input) {
      id
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > * {
    margin-bottom: ${themeGet('space.5')};
    color: ${themeGet('colors.mint')};
  }
`

const DefaultPartSelector = () => {
  const {
    data: { currentUser },
  } = useContext(AuthContext)

  const [
    createSinger,
    { loading: isCreatingSinger, error: singerCreationError },
  ] = useMutation(CREATE_SINGER_MUTATION, {
    onCompleted: (data) => {
      // TODO: Dispatch notification
      console.log('[DefaultPartSelector] created singer: ', data, currentUser)
    },
  })

  if (isCreatingSinger) return <Loading />
  if (singerCreationError) {
    console.log(
      '[DefaultPartSelector] error: ',
      singerCreationError,
      currentUser
    )
  }

  console.log('[DefaultPartSelector] creatSinger: ', createSinger)
  // if (!singer) {
  //   const singerInput = {
  //     user: currentUser.id,
  //     defaultPart: 'FUU',
  //   }

  //   createSinger({ variables: { input: singerInput } })
  // }

  const { t } = useTranslation()

  return (
    <Wrapper>
      <h4>{t('ROLE_SELECTOR_ONE_MORE_STEP')}</h4>
      <form>
        <select id="defaultPart">
          <option value="">{t('ROLE_SELECTOR_PLACEHOLDER')}</option>
          {Object.keys(VOICE_PARTS).map((key) => (
            <option key={key} value={VOICE_PARTS[key].id}>
              {t(VOICE_PARTS[key].tr)}
            </option>
          ))}
        </select>
      </form>
    </Wrapper>
  )
}

export default DefaultPartSelector
