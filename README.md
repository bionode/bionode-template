<p align="center">
  <a href="http://bionode.io">
    <img height="200" width="200" title="bionode" alt="bionode logo" src="https://rawgithub.com/bionode/bionode/master/docs/bionode-logo.min.svg"/>
  </a>
  <br/>
  <a href="http://bionode.io/">bionode.io</a>
</p>


# bionode-template

> Template module to use as a base for quickly creating bionode modules.

[![npm](https://img.shields.io/npm/v/bionode-template.svg?style=flat-square)](http://npmjs.org/package/bionode-template)
[![Travis](https://img.shields.io/travis/bionode/bionode-template.svg?style=flat-square)](https://travis-ci.org/bionode/bionode-template)
[![Coveralls](https://img.shields.io/coveralls/bionode/bionode-template.svg?style=flat-square)](http://coveralls.io/r/bionode/bionode-template)
[![Dependencies](http://img.shields.io/david/bionode/bionode-template.svg?style=flat-square)](http://david-dm.org/bionode/bionode-template)
[![npm](https://img.shields.io/npm/dt/bionode-template.svg?style=flat-square)](https://www.npmjs.com/package/bionode-template)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?style=flat-square)](https://gitter.im/bionode/bionode-template)


## Principles

This provides a quick template to build a bionode module. A bionode module should follow the [Unix philosophy](http://en.wikipedia.org/wiki/Unix_philosophy) and play nice with [Node.js](http://nodejs.org).

That is:

* Be small, simple and do one thing well;
* Use [Node's CommonJS module pattern](http://nodejs.org/docs/latest/api/modules.html) and be available on [NPM](http://npmjs.org);
* Provide Node.js [Streams](http://nodejs.org/api/stream.html);
* Provide a [Command Line Interface](http://en.wikipedia.org/wiki/Command-line_interface) compatible with [Unix pipes](http://en.wikipedia.org/wiki/Pipeline_%28Unix%29);
* If possible, work client-side (browser) using [browserify](https://github.com/substack/node-browserify);
* Provide testing (preferably with [tape](http://github.com/substack/tape) and [testling](https://ci.testling.com));
* Provide code coverage (preferably with [istanbul](https://github.com/gotwarlost/istanbul));
* Provide code with comments and documentation (preferably with [docco](https://github.com/jashkenas/docco));
* [KISS](http://en.wikipedia.org/wiki/KISS_principle) and don't [abuse objects](http://timruffles.github.io/you-probably-dont-want-an-object);
* Be [MIT](http://choosealicense.com/licenses/mit/) licensed.

To try to maximize the compatibility of the new module and anticipate possible use cases, the authors of the new bionode module should be aware of the existing bionode modules and other useful projects like [Dat](http://github.com/maxogden/dat).

The following sections should be adapted and included in the README.md file.


## Install

Install ```bionode-template``` with [npm](//npmjs.org):

```sh
$ npm install bionode-template
```
To use it as a command line tool, you can install it globally by adding ```-g``` .

Alternatively, just include `bionode-template.min.js` via a `<script/>` in your page or use [Browserify](http://browserify.org).

Usage
-----

 You can require the module in Node.js or in a browser:

```js
var template = require('bionode-template')
template.greet('World').on('data', console.log)
//=> {"greeting":"Hello World"}
```

Please read the [documentation](http://rawgit.com/bionode/bionode-template/master/docs/bionode-template.html) for the methods exposed by bionode-template.


### Command line examples

```sh
$ bionode-template greet World
$ echo World | bionode-template greet
```


### Usage with [Dat](http://dat-data.com)

```sh
echo World | bionode-template greet | dat import --json
```


## Contributing

We welcome all kinds of contributions at all levels of experience, please read the [CONTRIBUTING.md](CONTRIBUTING.md) to get started!


## Communication channels

Don't be shy! Come talk to us :smiley:

* **Email** [mail@bionode.io](mailto:mail@bionode.io)
* **Chat room** [http://gitter.im/bionode/bionode-template](http://gitter.im/bionode/bionode-template)
* **IRC** #bionode on Freenode
* **Twitter** [@bionode](http://twitter.com/@bionode)
