const fs = require('fs');
const path = require('path');
const PouchDB = require('pouchdb-node');

const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');

const content = fs.readFileSync(path.join(__dirname, './schema.gql'), 'utf8');
const schema = buildSchema(content);

const db = new PouchDB(process.env.SHORTENER_CONNECTION_STRING);

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
