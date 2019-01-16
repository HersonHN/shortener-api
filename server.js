
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('public'));
app.use('/graphql', require('./modules/graphql'));
app.post('/create-short-url', require('./modules/create-short-url'));
app.get('/:short', require('./modules/load-url'));

app.listen(4000, () => console.log('Running on localhost:4000'));
