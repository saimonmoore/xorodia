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

  type Mutation {
    createDirector(input: DirectorInput!): Director
    updateDirector(id: Int!, input: DirectorInput!): Director
    deleteDirector(id: Int!): Director
  }
`
