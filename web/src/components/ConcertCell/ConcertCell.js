import Concert from 'src/components/Concert'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: Int!) {
    concert: concert(id: $id) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Concert not found</div>

export const Success = ({ concert }) => {
  return <Concert concert={concert} />
}
