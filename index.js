#!/usr/bin/env node
var http = require("http")
var connect = require("connect")
var WPTProxy = require("wptproxy")
var loadConfig = require("./loadConfig")


if ( process.argv.length < 3 ) {
  console.log("\n  You forgot to pass the path for the config file.")
  console.log("\n  Example: \n  node index.js ./wpt-config.json\n")
  return
}

loadConfig(process.argv[2], function(data) {
  var wp = new WPTProxy(data)
  var app = connect()
  app.use(wp.handler)
  http.createServer(app).listen(data.port || 3000)
})
