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

`pull-stringify` takes the same arguments as
[JSONStream.stringify](https://github.com/dominictarr/JSONStream#jsonstreamstringifyopen-sep-close) but as a pull stream.


Also if you want line separated json, a default is provided:

``` js
pull(
  pull.value([A, B, C]),
  stringify.lines(),
  toPull(process.stdout)
)
```

## License

MIT
