import Part from 'src/components/Part'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: Int!) {
    part: part(id: $id) {
      id
      voiceType
      createdAt
      updatedAt
      user
      songs
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Part not found</div>

export const Success = ({ part }) => {
  return <Part part={part} />
}
