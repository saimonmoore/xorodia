import Song from 'src/components/Song'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: Int!) {
    song: song(id: $id) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Song not found</div>

export const Success = ({ song }) => {
  return <Song song={song} />
}
