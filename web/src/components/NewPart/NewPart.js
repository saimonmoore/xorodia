import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PartForm from 'src/components/PartForm'

const CREATE_POST_MUTATION = gql`
  mutation CreatePartMutation($input: PartInput!) {
    createPart(input: $input) {
      id
    }
  }
`

const NewPart = () => {
  const [createPart, { loading, error }] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.parts())
    },
  })

  const onSave = (input) => {
    createPart({ variables: { input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Part</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <PartForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPart
