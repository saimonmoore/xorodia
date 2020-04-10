import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_POST_MUTATION = gql`
  mutation DeleteSongMutation($id: Int!) {
    deleteSong(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const SongsList = ({ songs }) => {
  const [deleteSong] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      location.reload()
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete song ' + id + '?')) {
      deleteSong({ variables: { id } })
    }
  }

  return (
    <div className="bg-white text-gray-900 border rounded-lg overflow-x-scroll">
      <table className="table-auto w-full min-w-3xl text-sm">
        <thead>
          <tr className="bg-gray-300 text-gray-700">
            <th className="font-semibold text-left p-3">id</th>
            <th className="font-semibold text-left p-3">createdAt</th>
            <th className="font-semibold text-left p-3">updatedAt</th>
            <th className="font-semibold text-left p-3">user</th>
            <th className="font-semibold text-left p-3">concerts</th>
            <th className="font-semibold text-left p-3">singer</th>
            <th className="font-semibold text-left p-3">director</th>
            <th className="font-semibold text-left p-3">parts</th>
            <th className="font-semibold text-left p-3">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <tr
              key={song.id}
              className="odd:bg-gray-100 even:bg-white border-t"
            >
              <td className="p-3">{truncate(song.id)}</td>
              <td className="p-3">{timeTag(song.createdAt)}</td>
              <td className="p-3">{timeTag(song.updatedAt)}</td>
              <td className="p-3">{truncate(song.user)}</td>
              <td className="p-3">{truncate(song.concerts)}</td>
              <td className="p-3">{truncate(song.singer)}</td>
              <td className="p-3">{truncate(song.director)}</td>
              <td className="p-3">{truncate(song.parts)}</td>
              <td className="p-3 pr-4 text-right whitespace-no-wrap">
                <nav>
                  <ul>
                    <li className="inline-block">
                      <Link
                        to={routes.adminSong({ id: song.id })}
                        title={'Show song ' + song.id + ' detail'}
                        className="text-xs bg-gray-100 text-gray-600 hover:bg-gray-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                      >
                        Show
                      </Link>
                    </li>
                    <li className="inline-block">
                      <Link
                        to={routes.adminEditSong({ id: song.id })}
                        title={'Edit song ' + song.id}
                        className="text-xs bg-gray-100 text-blue-600 hover:bg-blue-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                      >
                        Edit
                      </Link>
                    </li>
                    <li className="inline-block">
                      <a
                        href="#"
                        title={'Delete song ' + song.id}
                        className="text-xs bg-gray-100 text-red-600 hover:bg-red-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                        onClick={() => onDeleteClick(song.id)}
                      >
                        Delete
                      </a>
                    </li>
                  </ul>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SongsList
