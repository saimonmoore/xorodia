import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import SingerForm from 'src/components/SingerForm'

const CREATE_POST_MUTATION = gql`
  mutation CreateSingerMutation($input: SingerInput!) {
    createSinger(input: $input) {
      id
    }
  }
`

const NewSinger = () => {
  const [createSinger, { loading, error }] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.singers())
    },
  })

  const onSave = (input) => {
    createSinger({ variables: { input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Singer</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <SingerForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSinger
