const { parseHTML } = require('./index');

parseHTML('./test.html', './test_final.html', { title:'Hello there!', nav:'<nav>Nav</nav>', footer:'<div><p>footer</p></div>' });