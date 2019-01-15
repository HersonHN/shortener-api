// Using base62 instead of base64 to use only alphanumeric characters
var Base62 = require('base62/lib/ascii');

function generateURL() {
  let number = generateNumber();
  return Base62.encode(number);
}


function generateNumber() {
  // this is the numeric value for each url, here it uses the current
  // timestamp as a base, but because timestamps represents very large numbers
  // we cut out all the clutter to make the timestamp closer to a recent date
  // so the number can be smaller.

  let clutter = 1547532000000 // 2018-01-15 00:00:00;
  let timestamp = (new Date()) - clutter;

  // we also concatenate a random five digits number to the timestamp so
  // there's less chance to get duplicated numbers when two requests come
  // at the same time
  let random = fiveDigitsNumber();

  // the random number is added first so the generated ids in sequence don't
  // look similar
  let number = `${random}${timestamp}`;

  return number;
}


function fiveDigitsNumber() {
  let m = 10000;
  let m2 = m * 10 - 1 - m; // 89999
  let random = Math.ceil(Math.random() * m2) + m;
  return random;
}

module.exports = { generateURL };
