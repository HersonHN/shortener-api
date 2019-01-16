
const PouchDB = require('pouchdb-node');
PouchDB.plugin(require('pouchdb-find'));
const db = new PouchDB(process.env.SHORTENER_CONNECTION_STRING);

db.createIndex({
  index: { fields: ['short'] }
});

db.createIndex({
  index: { fields: ['count'] }
});

db.createIndex({
  index: { fields: [{count: 'desc'}] }
});