import { Link, routes } from '@redwoodjs/router'

import Directors from 'src/components/Directors'

export const QUERY = gql`
  query POSTS {
    directors {
      id
      createdAt
      updatedAt
      user
      songs
      concerts
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
      {'No directors yet. '}
      <Link
        to={routes.newDirector()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ directors }) => {
  return <Directors directors={directors} />
}
