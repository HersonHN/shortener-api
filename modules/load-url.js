const fs = require('fs');
const path = require('path');

const PouchDB = require('pouchdb-node');
const db = new PouchDB(process.env.SHORTENER_CONNECTION_STRING);

const page404 = fs.readFileSync(path.join(__dirname, '../pages/404.html'), 'utf8');

module.exports = function (req, res, next) {
  let { short } = req.params;

  console.log('short', short);
  if (short == 'graphql') return next();

  db.get(short)
    .then(sumCount)
    .then(doc => res.redirect(doc.long))
    .catch((e) => {
      if (e.error == 'not_found') {
        return res.send(page404);
      }
      res.send({ error: e })
    });
}

function sumCount(doc) {
  return new Promise(function (resolve, reject) {
    doc.count++;
    db.put(doc)
      .then(r => resolve(doc))
      .catch((e) => reject(e));
  });
}
