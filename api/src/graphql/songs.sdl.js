export const schema = gql`
  type Song {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    user: User
    concerts: Concert
    singer: Singer!
    director: Director!
    parts: Part
  }

  type Query {
    songs: [Song]
    song(id: Int!): Song
  }

  input SongInput {
    updatedAt: DateTime
    user: Int
    concerts: Int
    singer: Int
    director: Int
    parts: Int
  }

  type Mutation {
    createSong(input: SongInput!): Song
    updateSong(id: Int!, input: SongInput!): Song
    deleteSong(id: Int!): Song
  }
`
