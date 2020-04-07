import Singer from 'src/components/Singer'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: Int!) {
    singer: singer(id: $id) {
      id
      defaultPart
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Singer not found</div>

export const Success = ({ singer }) => {
  return <Singer singer={singer} />
}
