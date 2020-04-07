import DirectorsLayout from 'src/layouts/DirectorsLayout'
import DirectorCell from 'src/components/DirectorCell'

const DirectorPage = ({ id }) => {
  return (
    <DirectorsLayout>
      <DirectorCell id={id} />
    </DirectorsLayout>
  )
}

export default DirectorPage
