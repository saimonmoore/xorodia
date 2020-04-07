import UsersLayout from 'src/layouts/UsersLayout'
import EditUserCell from 'src/components/EditUserCell'

const EditUserAdminPage = ({ id }) => {
  return (
    <UsersLayout>
      <EditUserCell id={id} />
    </UsersLayout>
  )
}

export default EditUserAdminPage
