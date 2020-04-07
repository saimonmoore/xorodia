import { Link, routes } from '@redwoodjs/router'

import Singers from 'src/components/Singers'

export const QUERY = gql`
  query POSTS {
    singers {
      id
      defaultPart
      createdAt
      updatedAt
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
      {'No singers yet. '}
      <Link
        to={routes.adminNewSinger()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ singers }) => {
  return <Singers singers={singers} />
}
