import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import DirectorForm from 'src/components/DirectorForm'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: Int!) {
    director: director(id: $id) {
      id
      createdAt
      updatedAt
      user
      songs
      concerts
    }
  }
`
const UPDATE_POST_MUTATION = gql`
  mutation UpdateDirectorMutation($id: Int!, $input: DirectorInput!) {
    updateDirector(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ director }) => {
  const [updateDirector, { loading, error }] = useMutation(UPDATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.directors())
    },
  })

  const onSave = (input, id) => {
    updateDirector({ variables: { id, input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Director {director.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <DirectorForm director={director} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
