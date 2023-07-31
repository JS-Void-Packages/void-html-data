# Void HTML Data
Void HTML Data is a way to add data to an html file.

to get this to work, you need to add `{{ variable_name }}` to parts of your html where it will be replaced by a value of your choosing.

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
const { parseHTML } = require('void-html-data');

parseHTML('./test.html', './test_final.html', { title:'Hello There!', nav:'<nav>Nav</nav>', footer:'<div><p>footer</p></div>' });
```

this example will replace title with 'Hello There!', nav with `<nav>Nav</nav>` and footer with `<div><p>footer</p></div>`.

## language?
You should be able to name the variables with any letters you want as long as it is supported by javascript.