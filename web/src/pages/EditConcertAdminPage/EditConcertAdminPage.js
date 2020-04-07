import ConcertsLayout from 'src/layouts/ConcertsLayout'
import EditConcertCell from 'src/components/EditConcertCell'

const EditConcertAdminPage = ({ id }) => {
  return (
    <ConcertsLayout>
      <EditConcertCell id={id} />
    </ConcertsLayout>
  )
}

export default EditConcertAdminPage
