import React, { useContext } from 'react'
import { useQuery, useMutation } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'
import { AuthContext } from 'src/contexts/AuthContext'
import Loading from 'src/components/Loading'

const QUERY = gql`
  query FIND_USER_SINGER($id: Int!) {
    singer: userSinger(id: $id) {
      id
    }
  }
`

const CREATE_SINGER_MUTATION = gql`
  mutation CreateSingerMutation($input: SingerInput!) {
    createSinger(input: $input) {
      id
    }
  }
`

const PersistSinger = ({ singer, currentUser }) => {
  const [
    createSinger,
    { loading: isCreatingSinger, error: singerCreationError },
  ] = useMutation(CREATE_SINGER_MUTATION, {
    onCompleted: (data) => {
      // TODO: Dispatch notification
      console.log('[PersistSinger] associated this user to singer: ', data)
    },
  })

  if (isCreatingSinger) return <Loading />
  if (singerCreationError) {
    console.log('[PersistedSingerPolicy] error: ', singerCreationError)
  }

  console.log('[PersistedSingerPolicy] got user: ', currentUser)

  if (!singer) {
    const singerInput = {
      user: currentUser.id,
      defaultPart: 'FUU',
    }

    createSinger({ variables: { input: singerInput } })
  }
}

const PersistSingerPolicy = ({ children }) => {
  const { currentUser } = useContext(AuthContext)

  const { data, loading, error } = useQuery(QUERY, {
    variables: { id: currentUser.id },
  })

  if (loading) return <Loading />
  if (error) {
    console.log('[PersistSingerPolicy] BOOM: ', error)
  }

  const { singer } = data

  return (
    <PersistSinger singer={singer} currentUser={currentUser}>
      {children}
    </PersistSinger>
  )
}

export default PersistSingerPolicy
