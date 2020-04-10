import React, { useContext } from 'react'

import DefaultPartSelector from 'src/components/DefaultPartSelector'
import Songs from 'src/components/Songs'
import Spinner from 'src/components/Loading'
import { AppContext } from 'src/contexts/AppContext'

export const QUERY = gql`
  query FIND_USER_SINGER($id: Int!) {
    singer: userSinger(id: $id) {
      id
    }
  }
`

export const beforeQuery = ({ currentUser }) => {
  return { variables: { id: currentUser.id } }
}

export const Loading = () => <Spinner />

export const Empty = () => <DefaultPartSelector />

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ singer }) => {
  const {
    actions: { setSinger },
  } = useContext(AppContext)

  setSinger(singer)

  return <Songs />
}
