# is-weakmap [![Build Status](https://travis-ci.org/arthurvr/is-weakmap.svg?branch=master)](https://travis-ci.org/arthurvr/is-weakmap)

> Node module to easily check if an object is an [ES6 `WeakMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)


## Installation

```
$ npm install is-weakmap --save
```


## Usage

```javascript
const isWeakMap = require('is-weakmap');

isWeakMap(new WeakMap());
//=> true

isWeakMap({});
//=> false
```


## Related

* [`is-map`](https://github.com/arthurvr/is-map)
* [`is-set`](https://github.com/arthurvr/is-set)
* [`is-weakset`](https://github.com/arthurvr/is-weakset)


## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
