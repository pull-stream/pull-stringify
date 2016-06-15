# pull-stringify

JSON.stringify as pull stream

## example

``` js
var pull = require('pull-stream')
var stringify = require('pull-stringify')
var toPull = require('stream-to-pull-stream')

pull(
  pull.value([A, B, C]),
  stringify(),
  toPull(process.stdout)
)
```

## usage

### `stringify = require('pull-stringify')`

### `stringify(options)`

`options` is an object with the following optional keys:

- `open`: string to be prepended to first output string
- `close`: string to be appended to last output string
- `indent`: passed as third argument to `JSON.stringify`
- `separator`: string to be (ap|pre)pended to every other output string
- `prepend`: if `true` prepend separator, otherwise append separator
- `stringify`: custom function to use instead of `JSON.stringify`

`stringify(options)` returns a through [`pull-stream`](https://pull-stream.github.io).

defaults options are for [double newline delimited json](https://github.com/dominictarr/pull-json-doubleline/blob/master/index.js). double newline delimiting means you can use indented json as the stream format, which is more human readable.

```js
{
  open: '',
  separator: '\n\n',
  close: '',
  indent: 2,
  prepend: false,
  stringify: JSON.stringify
}
```

### `stringify.ldjson(stringifier)`

### `stringify.lines(stringifier)`

for single newline delimited json use `stringify.ldjson()` or `stringify.lines()`:

```js
{
  open: '',
  separator: '\n',
  close: '',
  indent: 0
}
```

you can pass a custom stringifier as an argument.

```js
// compatible with JSON but supports buffers.
var JSONB = require('json-buffer')

// use defaults
stringify({ stringify: JSONB.stringify })

// or
stringify.lines(JSONB.stringify)
```


### `stringify.array()`

for a single json array use `stringify.array()`

```js
{
  open: '[',
  separator: ',\n',
  close: ']\n',
  indent: 2,
  prepend: true
}
```

## License

MIT
