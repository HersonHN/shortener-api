
const PouchDB = require('pouchdb-node');
PouchDB.plugin(require('pouchdb-find'));

const db = new PouchDB(process.env.SHORTENER_CONNECTION_STRING);

function getTopHits() {
  return db.find({
      selector: {
        count: { $gt: 0 },
      },
      sort: [{ count: 'desc' }],
      limit: 50
    });
}

module.exports = { getTopHits };
