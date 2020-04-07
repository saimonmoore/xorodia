import SongsLayout from 'src/layouts/SongsLayout'
import SongCell from 'src/components/SongCell'

const SongPage = ({ id }) => {
  return (
    <SongsLayout>
      <SongCell id={id} />
    </SongsLayout>
  )
}

export default SongPage
