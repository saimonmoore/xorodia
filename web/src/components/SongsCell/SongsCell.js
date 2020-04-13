import React, { useContext } from 'react'
import { Link, routes, navigate } from '@redwoodjs/router'

import Songs from 'src/components/Songs'
import Spinner from 'src/components/Loading'
import { AppContext } from 'src/contexts/AppContext'

// TODO: Users songs
export const QUERY = gql`
  query SONGS {
    songs {
      id
      createdAt
      updatedAt
    }
  }
`

export const beforeQuery = ({ currentUser }) => {
  return { variables: {} }
  // return { variables: { id: currentUser.id } }
}

export const Loading = () => <Spinner />

export const Empty = () => {
  return <div className="text-center">{'No songs yet. '}</div>
}

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ songs }) => {
  return <Songs songs={songs} />
}
