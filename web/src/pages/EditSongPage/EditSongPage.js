import SongsLayout from 'src/layouts/SongsLayout'
import EditSongCell from 'src/components/EditSongCell'

const EditSongPage = ({ id }) => {
  return (
    <SongsLayout>
      <EditSongCell id={id} />
    </SongsLayout>
  )
}

export default EditSongPage
