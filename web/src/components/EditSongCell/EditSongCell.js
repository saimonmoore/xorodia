import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import SongForm from 'src/components/SongForm'

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
const UPDATE_POST_MUTATION = gql`
  mutation UpdateSongMutation($id: Int!, $input: SongInput!) {
    updateSong(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ song }) => {
  const [updateSong, { loading, error }] = useMutation(UPDATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.songs())
    },
  })

  const onSave = (input, id) => {
    updateSong({ variables: { id, input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Song {song.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <SongForm song={song} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
