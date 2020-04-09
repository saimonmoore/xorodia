import React, { useEffect } from 'react'
import { routes } from '@redwoodjs/router'
import { useAuth } from 'react-use-auth'
import AppLayout from 'src/layouts/AppLayout'

const Auth0CallbackPage = () => {
  const { handleAuthentication } = useAuth()
  useEffect(() => {
    // if logged in & no user in db redirect to /users/new
    // if logged in & user found in db redirect to home
    // (do the same check in index/middleware and always redirect until a user is persisted)
    // In /users/new :
    //
    // User must choose to be a singer or a director:
    // - singer (must choose default part) => create singer in db
    // - director => create director & singer (must choose default part) in db
    // redirect to home
    // In home:
    // - Choir icon =>
    //   /songs
    //
    //   can:
    //
    //    - list songs (MVP):
    //      categorized by due by periods
    //    - view song (MVP)
    //      shows:
    //       - parts (MVP)
    //       - song lyrics + partitura (later)
    //       - list of practice sessions (later)
    //       - add themselves to a practice session (later)
    //       - remove themselves from a practice session (later)
    //    - add themselves to a song (MVP)
    //      (i.e. decide if they are going to sing or not, director chooses part)
    //    - remove themselves from a song (MVP)
    //    - list concerts (later):
    //    - show concert (later):
    // - Director icon (maybe unify) =>
    //   /songs
    //
    //   can:
    //
    //    - create song (set due date) (MVP)
    //      - create part (MVP)
    //      - remove part (MVP)
    //      - special parts (later)
    //      - create recurring + special practice sessions (later)
    //    - edit song (MVP)
    //    - delete song (MVP)
    //    - create concert (set due date) (later)
    //    - edit concert (later)
    //      - add song (later)
    //      - delete song (later)
    //    - delete concert (later)
    //    - PLUS ALL SINGER ACTIONS
    handleAuthentication({ postLoginRoute: routes.home() })
  }, [])

  // TODO: Persist user in db
  return (
    <AppLayout>
      <h1>
        This is the auth callback page, you should be redirected immediately.
      </h1>
    </AppLayout>
  )
}

export default Auth0CallbackPage
