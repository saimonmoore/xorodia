import SongsLayout from 'src/layouts/SongsLayout'
import EditSongCell from 'src/components/EditSongCell'

const EditSongAdminPage = ({ id }) => {
  return (
    <SongsLayout>
      <EditSongCell id={id} />
    </SongsLayout>
  )
}

export default EditSongAdminPage
