import DirectorsLayout from 'src/layouts/DirectorsLayout'
import EditDirectorCell from 'src/components/EditDirectorCell'

const EditDirectorAdminPage = ({ id }) => {
  return (
    <DirectorsLayout>
      <EditDirectorCell id={id} />
    </DirectorsLayout>
  )
}

export default EditDirectorAdminPage
