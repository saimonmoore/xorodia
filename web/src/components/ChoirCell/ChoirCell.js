import React, { useContext } from 'react'
import { Link, routes, navigate } from '@redwoodjs/router'

import DefaultPartSelector from 'src/components/DefaultPartSelector'
import Songs from 'src/components/Songs'
import Spinner from 'src/components/Loading'

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
  navigate(routes.songs())

  return <Spinner />
}
