// # bionode-template
// > Template module to use as a base for quickly creating bionode modules.
// >
// > doi: [?](?)
// > author: [Bruno Vieira](http://bmpvieira.com)
// > email: <mail@bmpvieira.com>
// > license: [MIT](https://raw.githubusercontent.com/bionode/bionode-template/master/LICENSE)
//
// ---
//
// ## Usage
// This module can be used in Node.js/browsers, as described further below, or as a command line tool.
// Examples:
//
//     $ npm install -g bionode-template
//
//     # bionode-template [command] [arguments]
//     $ bionode-template greet World
//     $ echo World | bionode-template greet
//     $ echo World | bionode-template greet |dat import --json


var through = require('through2')
var debug = require('debug')('bionode-template')

var template = module.exports

CONSTANT = 'Hello'

// ## Greet
// Returns a stream that transforms name strings into greeting messages:
//
//     template.greet('World').on('data', console.log)
//     => {"greeting":"Hello World"}
//
// The name can also be passed with write:
//
//     var greet = template.greet()
//     greet.on('data', console.log)
//     greet.write('World')
//     greet.write('Foo')
//     => {"greeting":"Hello World"}
//     => {"greeting":"Hello Foo"}
//
// Or piped, for example, from a file:
//
//     var split = require('split')
//
//     fs.createReadStream('names.txt')
//     .pipe(split())
//     .pipe(greet)
//     .on('data', console.log)

template.greet = function(name) {
  var stream = through.obj(transform)
  if (name) { stream.write(name); stream.end() }
  return stream

  function transform(obj, enc, next) {
    var self = this
    var name = obj.toString().replace('\n', '')
    var message = [
      CONSTANT,
      name
    ].join(' ')

    debug('greet message', message)

    this.push({greeting: message})
    next()
  }
}
