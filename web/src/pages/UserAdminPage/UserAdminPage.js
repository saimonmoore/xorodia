import UsersLayout from 'src/layouts/UsersLayout'
import UserCell from 'src/components/UserCell'

const UserAdminPage = ({ id }) => {
  return (
    <UsersLayout>
      <UserCell id={id} />
    </UsersLayout>
  )
}

export default UserAdminPage
