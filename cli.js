#!/usr/bin/env node
var JSONStream = require('JSONStream')
var template = require('./')

var args = process.argv.slice(2)

var command = args[0]
var arg1 = args[1]

var templateStream = template[command](arg1)

templateStream
.pipe(JSONStream.stringify(false))
.pipe(process.stdout)

if (!process.stdin.isTTY) {
  process.stdin
  .pipe(templateStream)
}
