var lodash = require('lodash')
var prod150 = require('./data/prod150.json')

const prod150Filters = prod150.filter(e => e.price > 150);

console.log('Lista filatrada: ',prod150Filters)
console.log(lodash.shuffle(prod150Filters))