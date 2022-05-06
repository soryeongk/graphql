const Graphql = require('graphql');

const gqlMemberSchema = Graphql.buildSchema(`
  enum SoptParts {
    PLAN
    DESIGN
    SERVER
    WEB
    iOS
    ANDROID
  }

  type GqlMember {
    id: ID!
    name: String!
    latestSopt: Int
    part: SoptParts!
    isOnDiet: Boolean
  }

  input NewGqlMember {
    name: String!
    part: SoptParts!
    latestSopt: Int
    isOnDiet: Boolean
  }

  type Query {
    getAllGqlMembers: [GqlMember]
    getGqlMember(id: ID!): GqlMember
  }

  type Mutation {
    addGqlMember(newInput: NewGqlMember): GqlMember
    updateGqlMember(id: ID!, modified: NewGqlMember): GqlMember
    toggleDietStatus(id: ID!): GqlMember
    deleteX(id: ID!): String
  }
`);

module.exports = gqlMemberSchema;