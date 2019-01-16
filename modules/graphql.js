const fs = require('fs');
const path = require('path');

const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');

const tophits = require('./top-hits');

const content = fs.readFileSync(path.join(__dirname, './schema.gql'), 'utf8');
const schema = buildSchema(content);

const isProduction = process.env.NODE_ENV == 'production';


// Root resolver
var root = {
  topHits: function () {
    return tophits.getTopHits().then(res => res.docs)
  }
};

module.exports = express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: !isProduction
});
