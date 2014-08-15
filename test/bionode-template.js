var split = require('split')
var test = require('tape')

var template = require('../')


test('Should take a name argument and return object with greeting', function(t) {
  t.plan(1)
  template.greet('World').on('data', function(data) {
    t.deepEqual(data, {'greeting': 'Hello World'})
  })
})


test('Should write to stream and return objects with greetings', function(t) {
  t.plan(1)
  var greet = createGreet(t)
  greet.write('World')
  greet.write('Foo')
  greet.end()
})


test('Should pipe to stream and return objects with greetings', function(t) {
  t.plan(1)
  var greet = createGreet(t)
  var names = "World\nFoo"
  var stream = split()
  stream.pipe(greet)
  stream.write(names)
  stream.end()

})


function createGreet(t) {
  var greetings = []
  var result = [
    {greeting: 'Hello World'},
    {greeting: 'Hello Foo'}
  ]
  var greet = template.greet()
  greet.on('data', function(data) { greetings.push(data) })
  greet.on('end', function() { t.deepEqual(greetings, result) })
  return greet
}
