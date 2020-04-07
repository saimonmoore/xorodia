import SingersLayout from 'src/layouts/SingersLayout'
import EditSingerCell from 'src/components/EditSingerCell'

const EditSingerPage = ({ id }) => {
  return (
    <SingersLayout>
      <EditSingerCell id={id} />
    </SingersLayout>
  )
}

export default EditSingerPage
