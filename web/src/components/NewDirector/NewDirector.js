import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import DirectorForm from 'src/components/DirectorForm'

const CREATE_POST_MUTATION = gql`
  mutation CreateDirectorMutation($input: DirectorInput!) {
    createDirector(input: $input) {
      id
    }
  }
`

const NewDirector = () => {
  const [createDirector, { loading, error }] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.directors())
    },
  })

  const onSave = (input) => {
    createDirector({ variables: { input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Director</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <DirectorForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewDirector
