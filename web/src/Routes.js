// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

// TODO: Add AuthPolicy middleware:
// - checks if logged user as associated db user and redirects
const Routes = () => {
  return (
    <Router>
      <Route
        path="/admin/directors/new"
        page={NewDirectorAdminPage}
        name="adminNewDirector"
      />
      <Route
        path="/admin/directors/{id:Int}/edit"
        page={EditDirectorAdminPage}
        name="adminEditDirector"
      />
      <Route
        path="/admin/directors/{id:Int}"
        page={DirectorAdminPage}
        name="adminDirector"
      />
      <Route
        path="/admin/directors"
        page={DirectorsAdminPage}
        name="adminDirectors"
      />
      <Route
        path="/admin/concerts/new"
        page={NewConcertAdminPage}
        name="adminNewConcert"
      />
      <Route
        path="/admin/concerts/{id:Int}/edit"
        page={EditConcertAdminPage}
        name="adminEditConcert"
      />
      <Route
        path="/admin/concerts/{id:Int}"
        page={ConcertAdminPage}
        name="adminConcert"
      />
      <Route
        path="/admin/concerts"
        page={ConcertsAdminPage}
        name="adminConcerts"
      />
      <Route
        path="/admin/parts/new"
        page={NewPartAdminPage}
        name="adminNewPart"
      />
      <Route
        path="/admin/parts/{id:Int}/edit"
        page={EditPartAdminPage}
        name="adminEditPart"
      />
      <Route
        path="/admin/parts/{id:Int}"
        page={PartAdminPage}
        name="adminPart"
      />
      <Route path="/admin/parts" page={PartsAdminPage} name="adminParts" />
      <Route
        path="/admin/songs/new"
        page={NewSongAdminPage}
        name="adminNewSong"
      />
      <Route
        path="/admin/songs/{id:Int}/edit"
        page={EditSongAdminPage}
        name="adminEditSong"
      />
      <Route
        path="/admin/songs/{id:Int}"
        page={SongAdminPage}
        name="adminSong"
      />
      <Route path="/admin/songs" page={SongsAdminPage} name="adminSongs" />
      <Route
        path="/admin/singers/new"
        page={NewSingerAdminPage}
        name="adminNewSinger"
      />
      <Route
        path="/admin/singers/{id:Int}/edit"
        page={EditSingerAdminPage}
        name="adminEditSinger"
      />
      <Route
        path="/admin/singers/{id:Int}"
        page={SingerAdminPage}
        name="adminSinger"
      />
      <Route
        path="/admin/singers"
        page={SingersAdminPage}
        name="adminSingers"
      />
      <Route
        path="/admin/users/new"
        page={NewUserAdminPage}
        name="adminNewUser"
      />
      <Route
        path="/admin/users/{id:Int}/edit"
        page={EditUserAdminPage}
        name="adminEditUser"
      />
      <Route
        path="/admin/users/{id:Int}"
        page={UserAdminPage}
        name="adminUser"
      />
      <Route path="/admin/users" page={UsersAdminPage} name="adminUsers" />
      <Route path="/director" page={DirectorPage} name="director" />
      <Route path="/choir" page={ChoirPage} name="choir" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/auth0_callback" page={Auth0Callback} name="auth0Callback" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
