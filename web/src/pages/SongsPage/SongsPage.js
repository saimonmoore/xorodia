import React, { useContext } from 'react'

import AppLayout from 'src/layouts/AppLayout'
import SongsCell from 'src/components/SongsCell'

import { AuthContext } from 'src/contexts/AuthContext'

const SongsList = () => {
  const {
    data: { currentUser },
  } = useContext(AuthContext)

  return <SongsCell currentUser={currentUser} />
}

const SongsPage = () => {
  return (
    <AppLayout>
      <SongsList />
    </AppLayout>
  )
}

export default SongsPage
