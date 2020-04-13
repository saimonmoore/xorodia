import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
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
  console.log('[Combobox] initialValue: ', initialValue, value)

  return (
    <Autocomplete
      id="combo-box-demo"
      options={options}
      getOptionLabel={(option) => option.title}
      getOptionSelected={(option, value) => option.id === value.id}
      style={{ width: 300 }}
      value={value}
      onChange={(event, option) => {
        console.log('[Combobox] setting new option: ', option)
        setValue(option)
        onChange && onChange(option)
      }}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
    />
  )
}

const CREATE_SINGER_MUTATION = gql`
  mutation CreateSingerMutation($input: SingerWithUserInput!) {
    createSingerWithUser(input: $input) {
      id
    }
  }
`
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: theme.spacing(256),
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(8),
    },
  },
  input: {
    color: 'chartreuse',
  },
}))

const Section = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${themeGet('colors.randomCyan')};
  height: 300px;
  width: 520px;
  margin-left: ${themeGet('space.5')}
  margin-right: ${themeGet('space.5')}
`

const Header = styled.div`
  width: auto;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${themeGet('space.7')};
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

  options.unshift({ id: '', title: '' })

  const [defaultPart, setDefaultPart] = useState(options[0])

  const classes = useStyles()

  const {
    data: { currentUser },
  } = useContext(AuthContext)

  const [
    createSinger,
    { loading: isCreatingSinger, error: singerCreationError },
  ] = useMutation(CREATE_SINGER_MUTATION, {
    onCompleted: (result) => {
      console.log('Dispatch notification, role saved!', result)
      navigate(routes.choir())
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

  const validateAndPersist = () => {
    if (!defaultPart) return
    if (defaultPart && !defaultPart.id.length) return

    const singerInput = {
      defaultPart: defaultPart.id,
      user: {
        connect: {
          id: currentUser.id,
        },
      },
    }

    createSinger({ variables: { input: singerInput } })
  }

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
        <Header>
          <h4>{t('ROLE_SELECTOR_ONE_MORE_STEP')}</h4>
        </Header>
        <Section elevation={3}>
          <CardContent>
            <ComboBox
              initialValue={defaultPart}
              options={options}
              label={t('ROLE_SELECTOR_PLACEHOLDER')}
              onChange={(option) => setDefaultPart(option)}
              classes={{ groupLabel: classes.input }}
            />
          </CardContent>
          <CardActions>
            <Button
              color="primary"
              variant="contained"
              onClick={validateAndPersist}
            >
              {t('BUTTON_NEXT')}
            </Button>
          </CardActions>
        </Section>
      </div>
    </Wrapper>
  )
}

export default DefaultPartSelector
