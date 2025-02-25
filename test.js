const { parseFile, parseData } = require('./index');
const { readFileSync } = require('fs');

parseFile('./test.html', './test_final.html', { title:'Hello there!', nav:'<nav>Nav</nav>', footer:'<div><p>footer</p></div>' });

let data = parseData(readFileSync('./test.html', 'utf8'), { title:'Hello there!', nav:'<nav>Nav</nav>', footer:'<div><p>footer</p></div>' });
console.log(data);