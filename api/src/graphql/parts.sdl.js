export const schema = gql`
  type Part {
    id: Int!
    voiceType: VoiceType!
    createdAt: DateTime!
    updatedAt: DateTime!
    user: User
    songs: Song
  }

  type Query {
    parts: [Part]
    part(id: Int!): Part
  }

  input PartInput {
    voiceType: VoiceType
    updatedAt: DateTime
    user: Int
    songs: Int
  }

  type Mutation {
    createPart(input: PartInput!): Part
    updatePart(id: Int!, input: PartInput!): Part
    deletePart(id: Int!): Part
  }
`
