import ConcertsLayout from 'src/layouts/ConcertsLayout'
import ConcertCell from 'src/components/ConcertCell'

const ConcertPage = ({ id }) => {
  return (
    <ConcertsLayout>
      <ConcertCell id={id} />
    </ConcertsLayout>
  )
}

export default ConcertPage
