import ConcertsLayout from 'src/layouts/ConcertsLayout'
import ConcertCell from 'src/components/ConcertCell'

const ConcertAdminPage = ({ id }) => {
  return (
    <ConcertsLayout>
      <ConcertCell id={id} />
    </ConcertsLayout>
  )
}

export default ConcertAdminPage
