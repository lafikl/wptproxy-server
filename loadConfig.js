
/**
 * Load configuration files
 * @param  {String} filePath
 * @param  {Function} cb
 */
module.exports = function(filePath, cb) {
  var fs = require("fs")
  var path = require("path")
  fs.readFile(path.resolve(__dirname, filePath), function(err, data) {
    if ( err ) throw err
    try {
      data = JSON.parse(data.toString())
    } catch(e) {
      console.error(filePath + " is not a valid JSON.")
      throw e
    }

    cb(data)
  })
}