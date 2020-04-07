import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PartForm from 'src/components/PartForm'

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
const UPDATE_POST_MUTATION = gql`
  mutation UpdatePartMutation($id: Int!, $input: PartInput!) {
    updatePart(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ part }) => {
  const [updatePart, { loading, error }] = useMutation(UPDATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.parts())
    },
  })

  const onSave = (input, id) => {
    updatePart({ variables: { id, input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Part {part.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <PartForm part={part} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
