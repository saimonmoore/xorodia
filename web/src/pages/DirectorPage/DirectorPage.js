import React, { useContext } from 'react'

import AppLayout from 'src/layouts/AppLayout'
import DirectorCell from 'src/components/DirectorCell'

import { AuthContext } from 'src/contexts/AuthContext'

const DirectorPersist = () => {
  const {
    data: { currentUser },
  } = useContext(AuthContext)

  return <DirectorCell currentUser={currentUser} />
}

const DirectorPage = () => {
  return (
    <AppLayout>
      <DirectorPersist />
    </AppLayout>
  )
}

export default DirectorPage
