import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import SingerForm from 'src/components/SingerForm'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: Int!) {
    singer: singer(id: $id) {
      id
      defaultPart
      createdAt
      updatedAt
      user
      concerts
      songs
    }
  }
`
const UPDATE_POST_MUTATION = gql`
  mutation UpdateSingerMutation($id: Int!, $input: SingerInput!) {
    updateSinger(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ singer }) => {
  const [updateSinger, { loading, error }] = useMutation(UPDATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.singers())
    },
  })

  const onSave = (input, id) => {
    updateSinger({ variables: { id, input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Singer {singer.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <SingerForm singer={singer} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
