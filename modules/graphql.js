const fs = require('fs');
const path = require('path');

const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');

const content = fs.readFileSync(path.join(__dirname, './schema.gql'), 'utf8');
const schema = buildSchema(content);

const tophits = require('./top-hits');


// Root resolver
var root = {
  topHits: function () {
    return tophits.getTopHits().then(res => res.docs)
  }
};

module.exports = express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true
});
