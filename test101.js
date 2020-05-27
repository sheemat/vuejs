

// ES5
var z = function(z, y) {
   return z * y;
}

// ES6
const k = (x, y) => x * y;

console.log(k(1,2));
console.log(z(1,2));

var url = require('url');
var adr = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,LTC,ETH&tsyms=USD,EUR";
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'