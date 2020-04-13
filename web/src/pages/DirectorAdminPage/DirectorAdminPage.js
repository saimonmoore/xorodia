import DirectorsLayout from 'src/layouts/DirectorsLayout'
import AdminDirectorCell from 'src/components/AdminDirectorCell'

const DirectorAdminPage = ({ id }) => {
  return (
    <DirectorsLayout>
      <AdminDirectorCell id={id} />
    </DirectorsLayout>
  )
}

export default DirectorAdminPage
