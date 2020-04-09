# Redwood
>**HEADS UP:** RedwoodJS is _NOT_ ready for use in Production. It relies heavily on Prisma2, which is currently in testing with an expected production release coming soon. See status at ["Is Prisma2 Ready?"](https://isprisma2ready.com)

## Getting Started
- [Redwoodjs.com](https://redwoodjs.com): home to all things RedwoodJS.
- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.   

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/api/functions/*`.

## Development

### Database

We're using [Prisma2](https://github.com/prisma/prisma2), a modern DB toolkit to query, migrate and model your database.

Prisma2 is [not ready for production](https://isprisma2ready.com) at the moment.

To create a development database:

```terminal
yarn redwood db up
```

This will read the schema definition in `api/prisma/schema.prisma` and generate a sqlite database in `api/prisma/dev.db`

If you've made changes to the schema run `yarn redwood db save` to generate a migration, and `yarn redwood db up` to apply the migration/ generate a new ORM client.

# Xorodia

## Roadmap


if logged in & no user in db redirect to /users/new
if logged in & user found in db redirect to home
(do the same check in index/middleware and always redirect until a user is persisted)
In /users/new :

User must choose to be a singer or a director:
- singer (must choose default part) => create singer in db
- director => create director & singer (must choose default part) in db
redirect to home
In home:
- Choir icon =>
  /songs

  can:

   - list songs (MVP):
     categorized by due by periods
   - view song (MVP)
     shows:
      - parts (MVP)
      - song lyrics + partitura (later)
      - list of practice sessions (later)
      - add themselves to a practice session (later)
      - remove themselves from a practice session (later)
   - add themselves to a song (MVP)
     (i.e. decide if they are going to sing or not, director chooses part)
   - remove themselves from a song (MVP)
   - list concerts (later):
   - show concert (later):
- Director icon (maybe unify) =>
  /songs

  can:

   - create song (set due date) (MVP)
     - create part (MVP)
     - remove part (MVP)
     - special parts (later)
     - create recurring + special practice sessions (later)
   - edit song (MVP)
   - delete song (MVP)
   - create concert (set due date) (later)
   - edit concert (later)
     - add song (later)
     - delete song (later)
   - delete concert (later)
   - PLUS ALL SINGER ACTIONS
