'use strict';
var test = require('ava');
var isWeakMap = require('./');

test(function (t) {
	t.assert(isWeakMap(new WeakMap()));
	t.assert(!isWeakMap(new Map()));
	t.assert(!isWeakMap({}));
});
