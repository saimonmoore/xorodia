import React, { useContext } from 'react'

import AppLayout from 'src/layouts/AppLayout'
import ChoirCell from 'src/components/ChoirCell'

import { AuthContext } from 'src/contexts/AuthContext'

const RoleSelection = () => {
  const {
    data: { currentUser },
  } = useContext(AuthContext)

  return <ChoirCell currentUser={currentUser} />
}

const ChoirPage = () => {
  return (
    <AppLayout>
      <RoleSelection />
    </AppLayout>
  )
}

export default ChoirPage
