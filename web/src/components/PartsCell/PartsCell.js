import { Link, routes } from '@redwoodjs/router'

import Parts from 'src/components/Parts'

export const QUERY = gql`
  query POSTS {
    parts {
      id
      voiceType
      createdAt
      updatedAt
      user
      songs
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
      {'No parts yet. '}
      <Link
        to={routes.adminNewPart()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ parts }) => {
  return <Parts parts={parts} />
}
