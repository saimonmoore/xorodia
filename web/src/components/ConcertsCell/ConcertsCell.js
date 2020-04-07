import { Link, routes } from '@redwoodjs/router'

import Concerts from 'src/components/Concerts'

export const QUERY = gql`
  query POSTS {
    concerts {
      id
      dueBy
      createdAt
      updatedAt
      songs
      singers
      director
      user
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="text-center">
      {'No concerts yet. '}
      <Link
        to={routes.newConcert()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ concerts }) => {
  return <Concerts concerts={concerts} />
}
