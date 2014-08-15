<p align="center">
  <a href="http://bionode.io">
    <img height="200" width="200" title="bionode" alt="bionode logo" src="https://rawgithub.com/bionode/bionode/master/docs/bionode-logo.min.svg"/>
  </a>
  <br/>
  <a href="http://bionode.io/">bionode.io</a>
</p>
# bionode-template
> Template module to use as a base for quickly creating bionode modules.

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![Gitter chat][gitter-image]][gitter-url]
[![DOI][doi-image]][doi-url]

Principles
----------
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

Install
-------

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

Contributing
------------

To contribute, clone this repo locally and commit your code on a separate branch.

Please write unit tests for your code, and check that everything works by running the following before opening a pull-request:

```sh
$ npm test
```

To test on the browser:

```sh
$ npm run test-browser
# if you get "No headless browser found" do:
$ npm install -g phantomjs
$ rm ~/.config/browser-launcher/config.json
```

Please also check for code coverage:

```sh
$ npm run coverage
```

To rebuild and minify the module for the browser:

```sh
$ npm run build-browser
```

To rebuild the documentation using the comments in the code:

```sh
$ npm run build-docs
```
Check the [issues](http://github.com/bionode/bionode-template/issues) for ways to contribute.

Contacts
--------
Bruno Vieira <[mail@bmpvieira.com](mailto:mail@bmpvieira.com)> [@bmpvieira](//twitter.com/bmpvieira)

Yannick Wurm ([yannick.poulet.org](http://yannick.poulet.org)) [@yannick__](//twitter.com/yannick__)

Licenses
--------

bionode-template is licensed under the [MIT](https://raw.github.com/bionode/bionode-template/master/LICENSE) license.  
Check [ChooseALicense.com](http://choosealicense.com/licenses/mit) for details.

[npm-url]: http://npmjs.org/package/bionode-template
[npm-image]: http://img.shields.io/npm/v/bionode-template.svg?style=flat
[travis-url]: http:////travis-ci.org/bionode/bionode-template
[travis-image]: http://img.shields.io/travis/bionode/bionode-template.svg?style=flat
[coveralls-url]: http:////coveralls.io/r/bionode/bionode-template
[coveralls-image]: http://img.shields.io/coveralls/bionode/bionode-template.svg?style=flat
[depstat-url]: http://david-dm.org/bionode/bionode-template
[depstat-image]: http://img.shields.io/david/bionode/bionode-template.svg?style=flat
[gitter-image]: http://img.shields.io/badge/gitter-bionode/bionode--template-brightgreen.svg?style=flat
[gitter-url]: https://gitter.im/bionode/bionode-template
[doi-url]: http://dx.doi.org/10.5281/zenodo.11297
[doi-image]: http://img.shields.io/badge/doi-10.5281/zenodo.11297-blue.svg?style=flat
