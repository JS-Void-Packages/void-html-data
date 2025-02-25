# Void HTML Data
Void HTML Data is a way to add data to an html file.

to get started, add variables like this `{{ variable_name }}` in your html, use void HTML Data to replace those variables with values, you're done.

example : 
```html
<!DOCTYPE html>
<head>
    <title>{{ title }}</title>
</head>
<body>
    {{ nav }}
    {{ footer }}
</body>
```

```js
const { parseFile, parseData } = require('void-html-data');
const { readFileSync } = require('fs');

// replace data then put it in test_final.html
parseFile('./test.html', './test_final.html', { title:'Hello there!', nav:'<nav>Nav</nav>', footer:'<div><p>footer</p></div>' });

// replace data then log it
let data = parseData(readFileSync('./test.html', 'utf8'), { title:'Hello there!', nav:'<nav>Nav</nav>', footer:'<div><p>footer</p></div>' });
console.log(data);
```

this example will replace title with 'Hello There!', nav with `<nav>Nav</nav>` and footer with `<div><p>footer</p></div>`.

## does this work with other letter or symbol not supported by utf8?
yes, just make sure to change the encoding of `parseFile`