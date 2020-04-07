export const schema = gql`
  type Concert {
    id: Int!
    dueBy: DateTime!
    createdAt: DateTime!
    updatedAt: DateTime!
    songs: Song
    singers: Singer
    director: Director!
    user: User
  }

  type Query {
    concerts: [Concert]
    concert(id: Int!): Concert
  }

  input ConcertInput {
    dueBy: DateTime
    updatedAt: DateTime
    songs: Int
    singers: Int
    director: Int
    user: Int
  }

  type Mutation {
    createConcert(input: ConcertInput!): Concert
    updateConcert(id: Int!, input: ConcertInput!): Concert
    deleteConcert(id: Int!): Concert
  }
`
