// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/directors/new" page={NewDirectorPage} name="newDirector" />
      <Route path="/directors/{id:Int}/edit" page={EditDirectorPage} name="editDirector" />
      <Route path="/directors/{id:Int}" page={DirectorPage} name="director" />
      <Route path="/directors" page={DirectorsPage} name="directors" />
      <Route path="/concerts/new" page={NewConcertPage} name="newConcert" />
      <Route path="/concerts/{id:Int}/edit" page={EditConcertPage} name="editConcert" />
      <Route path="/concerts/{id:Int}" page={ConcertPage} name="concert" />
      <Route path="/concerts" page={ConcertsPage} name="concerts" />
      <Route path="/parts/new" page={NewPartPage} name="newPart" />
      <Route path="/parts/{id:Int}/edit" page={EditPartPage} name="editPart" />
      <Route path="/parts/{id:Int}" page={PartPage} name="part" />
      <Route path="/parts" page={PartsPage} name="parts" />
      <Route path="/songs/new" page={NewSongPage} name="newSong" />
      <Route path="/songs/{id:Int}/edit" page={EditSongPage} name="editSong" />
      <Route path="/songs/{id:Int}" page={SongPage} name="song" />
      <Route path="/songs" page={SongsPage} name="songs" />
      <Route path="/singers/new" page={NewSingerPage} name="newSinger" />
      <Route path="/singers/{id:Int}/edit" page={EditSingerPage} name="editSinger" />
      <Route path="/singers/{id:Int}" page={SingerPage} name="singer" />
      <Route path="/singers" page={SingersPage} name="singers" />
      <Route path="/users/new" page={NewUserPage} name="newUser" />
      <Route path="/users/{id:Int}/edit" page={EditUserPage} name="editUser" />
      <Route path="/users/{id:Int}" page={UserPage} name="user" />
      <Route path="/users" page={UsersPage} name="users" />
      <Route path="/director" page={DirectorPage} name="director" />
      <Route path="/choir" page={ChoirPage} name="choir" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
