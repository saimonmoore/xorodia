import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import ConcertForm from 'src/components/ConcertForm'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: Int!) {
    concert: concert(id: $id) {
      id
      dueBy
      createdAt
      updatedAt
      songs
      singers
      director
      user
    }
  }
`
const UPDATE_POST_MUTATION = gql`
  mutation UpdateConcertMutation($id: Int!, $input: ConcertInput!) {
    updateConcert(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ concert }) => {
  const [updateConcert, { loading, error }] = useMutation(UPDATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.concerts())
    },
  })

  const onSave = (input, id) => {
    updateConcert({ variables: { id, input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Concert {concert.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <ConcertForm concert={concert} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
