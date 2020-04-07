import PartsLayout from 'src/layouts/PartsLayout'
import PartCell from 'src/components/PartCell'

const PartAdminPage = ({ id }) => {
  return (
    <PartsLayout>
      <PartCell id={id} />
    </PartsLayout>
  )
}

export default PartAdminPage
