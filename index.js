var defined = require('defined')

module.exports = pullStringify

function pullStringify (options) {
  options = defined(options, {})

  // default is pretty double newline delimited json
  var open = defined(options.open, '')
  var separator = defined(options.separator, '\n\n')
  var close = defined(options.close, '')
  var indent = defined(options.indent, 2)
  var prepend = defined(options.prepend, false)
  var stringify = defined(options.stringify, JSON.stringify)

  var first = true
  var ended
  return function (read) {
    return function (end, cb) {
      if (ended) return cb(ended)
      read(null, function (end, data) {
        if (!end) {
          var prefix = first ? open
            : prepend ? separator : ''
          var suffix = prepend ? '' : separator
          var string = stringify(data, null, indent)
          first = false

          cb(null, prefix + string + suffix)
        } else {
          ended = end
          if (ended !== true) return cb(ended)
          cb(null, first ? open + close : close)
        }
      })
    }
  }
}

module.exports.lines =
module.exports.ldjson = function (stringify) {
  return pullStringify({
    open: '',
    close: '',
    separator: '\n',
    indent: 0,
    stringify: stringify
  })
}

module.exports.array = function () {
  return pullStringify({
    open: '[',
    close: ']\n',
    separator: ',\n',
    indent: 2,
    prepend: true
  })
}
