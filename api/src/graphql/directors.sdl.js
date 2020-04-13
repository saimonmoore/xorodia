export const schema = gql`
  type Director {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    user: User!
    songs: Song
    concerts: Concert
  }

  type Query {
    directors: [Director]
    director(id: Int!): Director
  }

  input DirectorInput {
    updatedAt: DateTime
    user: Int
    songs: Int
    concerts: Int
  }

  input UserSetConnection {
    id: Int!
  }

  input UserRelationUpdate {
    connect: UserSetConnection
  }

  input DirectorWithUserInput {
    user: UserRelationUpdate
  }

  type Mutation {
    createDirector(input: DirectorInput!): Director
    createDirectorWithUser(input: DirectorWithUserInput!): Singer
    updateDirector(id: Int!, input: DirectorInput!): Director
    deleteDirector(id: Int!): Director
  }
`
