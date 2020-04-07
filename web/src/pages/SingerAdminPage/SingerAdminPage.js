import SingersLayout from 'src/layouts/SingersLayout'
import SingerCell from 'src/components/SingerCell'

const SingerAdminPage = ({ id }) => {
  return (
    <SingersLayout>
      <SingerCell id={id} />
    </SingersLayout>
  )
}

export default SingerAdminPage
