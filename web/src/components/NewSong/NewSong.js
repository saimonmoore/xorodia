import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import SongForm from 'src/components/SongForm'

const CREATE_POST_MUTATION = gql`
  mutation CreateSongMutation($input: SongInput!) {
    createSong(input: $input) {
      id
    }
  }
`

const NewSong = () => {
  const [createSong, { loading, error }] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.songs())
    },
  })

  const onSave = (input) => {
    createSong({ variables: { input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Song</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <SongForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSong
