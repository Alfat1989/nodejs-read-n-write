const fs = require('fs')

const data = fs.readFileSync('./d_05/example_03.json', { encoding: 'utf8' })
// console.log(data);
const dataObj = JSON.parse(data)
console.log(dataObj);