const fs = require('fs');
const path = require('path');

const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');

const content = fs.readFileSync(path.join(__dirname, './schema.gql'), 'utf8');
const schema = buildSchema(content);

// Root resolver
var root = {
  url: function (query) {
    return db.get(query.short).then(function (x) {
      return x;
    });
  }
};

module.exports = express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true
});
