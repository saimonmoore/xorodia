export const schema = gql`
  type Singer {
    id: Int!
    defaultPart: VoiceType
    createdAt: DateTime!
    updatedAt: DateTime!
    user: User!
    concerts: Concert
    songs: Song
  }

  type Query {
    singers: [Singer]
    singer(id: Int!): Singer
  }

  input SingerInput {
    defaultPart: VoiceType
    updatedAt: DateTime
    user: Int
    concerts: Int
    songs: Int
  }

  input UserSetConnection {
    id: Int!
  }

  input UserRelationUpdate {
    connect: UserSetConnection
  }

  input SingerWithUserInput {
    defaultPart: VoiceType
    user: UserRelationUpdate
  }

  type Mutation {
    createSinger(input: SingerInput!): Singer
    createSingerWithUser(input: SingerWithUserInput!): Singer
    updateSinger(id: Int!, input: SingerInput!): Singer
    deleteSinger(id: Int!): Singer
  }
`
