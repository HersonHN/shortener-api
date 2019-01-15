
const getTitle = require('get-title-at-url');
const PouchDB = require('pouchdb-node');

const generator = require('../scripts/url-generator');
const db = new PouchDB(process.env.SHORTENER_CONNECTION_STRING);

module.exports = function (req, res) {
  let { url, title } = req.body;
  let short = generator.generateURL();

  getTitle(url, (title) => {
    db.put({ _id: short, short, title, long: url, count: 0 })
      .then((data) => res.send({ url: short }))
      .catch((e) => res.send({ error: e }));
  });

}
