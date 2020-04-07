import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ConcertForm from 'src/components/ConcertForm'

const CREATE_POST_MUTATION = gql`
  mutation CreateConcertMutation($input: ConcertInput!) {
    createConcert(input: $input) {
      id
    }
  }
`

const NewConcert = () => {
  const [createConcert, { loading, error }] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.concerts())
    },
  })

  const onSave = (input) => {
    createConcert({ variables: { input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Concert</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <ConcertForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewConcert
