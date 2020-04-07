import Director from 'src/components/Director'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: Int!) {
    director: director(id: $id) {
      id
      createdAt
      updatedAt
      user
      songs
      concerts
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Director not found</div>

export const Success = ({ director }) => {
  return <Director director={director} />
}
