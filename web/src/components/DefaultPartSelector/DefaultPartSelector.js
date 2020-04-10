import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { useMutation } from '@redwoodjs/web'
import { useTranslation } from 'react-i18next'
import { Link, routes, navigate } from '@redwoodjs/router'
import { AuthContext } from 'src/contexts/AuthContext'
import Loading from 'src/components/Loading'
import { VOICE_PARTS } from 'src/helpers'

const ComboBox = ({ initialValue, label, options, onChange }) => {
  const [value, setValue] = useState(initialValue)

  return (
    <Autocomplete
      id="combo-box-demo"
      options={options}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
        onChange && onChange(newValue)
      }}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
    />
  )
}

const CREATE_SINGER_MUTATION = gql`
  mutation CreateSingerMutation($input: SingerInput!) {
    createSinger(input: $input) {
      id
    }
  }
`
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: theme.spacing(256),
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}))

const Section = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${themeGet('colors.appGreen')};
  height: 300px;
  width: 520px;
  margin-left: ${themeGet('space.5')}
  margin-right: ${themeGet('space.5')}
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > * {
    margin-bottom: ${themeGet('space.5')};
    color: ${themeGet('colors.lime')};
  }
`

const DefaultPartSelector = () => {
  const { t } = useTranslation()

  const options = Object.keys(VOICE_PARTS).map((key) => ({
    id: VOICE_PARTS[key].id,
    title: t(VOICE_PARTS[key].tr),
  }))

  const classes = useStyles()

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

  return (
    <Wrapper>
      <div className={classes.root}>
        <Section elevation={3}>
          <CardContent>
            <h4>{t('ROLE_SELECTOR_ONE_MORE_STEP')}</h4>
          </CardContent>
          <CardActions>
            <ComboBox
              initialValue={undefined}
              options={options}
              label={t('ROLE_SELECTOR_PLACEHOLDER')}
              onChange={(newValue) => {
                console.log('Now set to: ', newValue)
              }}
            />
          </CardActions>
        </Section>
      </div>
    </Wrapper>
  )
}

export default DefaultPartSelector
