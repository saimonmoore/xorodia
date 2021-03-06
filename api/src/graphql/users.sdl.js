export const schema = gql`
  type User {
    id: Int!
    email: String!
    firstName: String
    lastName: String
    lastName2: String
    picture: String
    language: String
    gender: Gender!
    director: Director
    singer: Singer
    songs: Song
    parts: Part
    concerts: Concert
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    users: [User]
    user(id: Int!): User
    userByEmail(email: String!): User
    userSinger(id: Int!): Singer
    userDirector(id: Int!): Director
  }

  input UserInput {
    email: String
    firstName: String
    lastName: String
    lastName2: String
    picture: String
    language: String
    gender: Gender
    director: Int
    singer: Int
    songs: Int
    parts: Int
    concerts: Int
    updatedAt: DateTime
  }

  type Mutation {
    createUser(input: UserInput!): User
    updateUser(id: Int!, input: UserInput!): User
    deleteUser(id: Int!): User
  }
`
