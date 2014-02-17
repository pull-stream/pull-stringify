module.exports = function stringify () {
  var first = true, ended
  return function (read) {
    return function (end, cb) {
      if(ended) return cb(true)
      read(null, function (end, data) {
        if(!end) {
          var f = first
          first = false
          cb(null, (f ? '[' : ',\n')+ JSON.stringify(data, null, 2))
        }
        else {
          ended = true
          cb(null, ']\n')
        }
      })
    }
  }
}

