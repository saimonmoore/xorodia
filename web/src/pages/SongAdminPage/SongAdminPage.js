import SongsLayout from 'src/layouts/SongsLayout'
import SongCell from 'src/components/SongCell'

const SongAdminPage = ({ id }) => {
  return (
    <SongsLayout>
      <SongCell id={id} />
    </SongsLayout>
  )
}

export default SongAdminPage
