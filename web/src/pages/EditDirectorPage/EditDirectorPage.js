import DirectorsLayout from 'src/layouts/DirectorsLayout'
import EditDirectorCell from 'src/components/EditDirectorCell'

const EditDirectorPage = ({ id }) => {
  return (
    <DirectorsLayout>
      <EditDirectorCell id={id} />
    </DirectorsLayout>
  )
}

export default EditDirectorPage
