
const getTitleAtURL = require('get-title-at-url');
const PouchDB = require('pouchdb-node');
PouchDB.plugin(require('pouchdb-find'));

const generator = require('../scripts/url-generator');
const db = new PouchDB(process.env.SHORTENER_CONNECTION_STRING);


module.exports = function (req, res) {
  let { url } = req.body;

  let short = generator.generateURL();

  findIfExists(url)
    .then(function(doc) {
      if (doc) return doc;
      return createNew(url, short);
    })
    .then((doc) => res.send({ url: doc.short }))
    .catch((e) => res.send({ error: e }));
}


function findIfExists(url) {
  return db.find({
    selector: {
      long: url,
    }
  }).then(results => {
    let [doc] = results.docs;
    return doc;
  });
}


function createNew(url, short) {
  return getTitle(url)
    .then((title) => db.put({ _id: short, short, title, long: url, count: 0 }))
    .then(() => ({ short }));
}


function getTitle(url) {
  return new Promise(function (resolve, reject) {
    getTitleAtURL(url, (title, error) => {
      if (error) return reject(error);
      resolve(title);
    });
  });
}
