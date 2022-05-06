const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const resolver = require('./resolver');
const gqlMemberSchema = require('./schema');

const PORT = 3000;

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: gqlMemberSchema,
  rootValue: resolver,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`
  ################################################
       🎉 This is soryeongk's kawaii server
      🛡️ Server listening on port ${PORT} 🛡️
  ################################################
`);
});