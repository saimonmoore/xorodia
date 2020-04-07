import PartsLayout from 'src/layouts/PartsLayout'
import EditPartCell from 'src/components/EditPartCell'

const EditPartAdminPage = ({ id }) => {
  return (
    <PartsLayout>
      <EditPartCell id={id} />
    </PartsLayout>
  )
}

export default EditPartAdminPage
