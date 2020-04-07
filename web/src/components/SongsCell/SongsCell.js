import { Link, routes } from '@redwoodjs/router'

import Songs from 'src/components/Songs'

export const QUERY = gql`
  query POSTS {
    songs {
      id
      createdAt
      updatedAt
      user
      concerts
      singer
      director
      parts
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
      {'No songs yet. '}
      <Link
        to={routes.newSong()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ songs }) => {
  return <Songs songs={songs} />
}
