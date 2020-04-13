import React, { useContext } from 'react'
import { useMutation } from '@redwoodjs/web'
import { routes, navigate } from '@redwoodjs/router'

import { AuthContext } from 'src/contexts/AuthContext'
import { AppContext } from 'src/contexts/AppContext'
import Songs from 'src/components/Songs'
import Spinner from 'src/components/Loading'
import Director from 'src/components/Director'

export const QUERY = gql`
  query FIND_USER_DIRECTOR($id: Int!) {
    director: userDirector(id: $id) {
      id
    }
  }
`

const CREATE_DIRECTOR_MUTATION = gql`
  mutation CreateDirectorMutation($input: DirectorWithUserInput!) {
    createDirectorWithUser(input: $input) {
      id
    }
  }
`

export const beforeQuery = ({ currentUser }) => {
  return { variables: { id: currentUser.id } }
}

export const Loading = () => <Spinner />

export const Empty = () => {
  const {
    data: { currentUser },
  } = useContext(AuthContext)

  const {
    actions: { setDirector },
  } = useContext(AppContext)

  const [
    createDirector,
    { loading: isCreatingDirector, error: directorCreationError },
  ] = useMutation(CREATE_DIRECTOR_MUTATION, {
    onCompleted: (result) => {
      console.log('Dispatch notification, role saved!', result, setDirector)
      navigate(routes.director())
    },
  })

  if (isCreatingDirector) return <Spinner />
  if (directorCreationError) {
    console.log('[DirectorCell] error: ', directorCreationError, currentUser)
  }

  const directorInput = {
    user: {
      connect: {
        id: currentUser.id,
      },
    },
  }

  createDirector({ variables: { input: directorInput } })

  return <Spinner />
}

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ director }) => {
  console.log('[DirectorCell] Director created: ', director)
  navigate(routes.songs())

  return <Spinner />
}
