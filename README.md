# pull-stringify

JSON.stringify as pull stream

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
## License

MIT
