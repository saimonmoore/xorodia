import SingersLayout from 'src/layouts/SingersLayout'
import EditSingerCell from 'src/components/EditSingerCell'

const EditSingerAdminPage = ({ id }) => {
  return (
    <SingersLayout>
      <EditSingerCell id={id} />
    </SingersLayout>
  )
}

export default EditSingerAdminPage
