// The GraphQL schema
const typeDefs = `
type User {
  name: String
  email: String
  phone: String
  role: String
}

type Query {
  users: [User]
  finduser(email:String!): User 
}

input userInput {
  name:String! 
  email: String!
  phone: String!
  role: String!
  pass: String!
}

type Mutation {
  register(newuser:userInput!):User
}
`;

export default typeDefs;
