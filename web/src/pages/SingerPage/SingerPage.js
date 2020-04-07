import SingersLayout from 'src/layouts/SingersLayout'
import SingerCell from 'src/components/SingerCell'

const SingerPage = ({ id }) => {
  return (
    <SingersLayout>
      <SingerCell id={id} />
    </SingersLayout>
  )
}

export default SingerPage
