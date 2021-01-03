# fast-printf

[![Travis build status](http://img.shields.io/travis/gajus/fast-printf/master.svg?style=flat-square)](https://travis-ci.org/gajus/fast-printf)
[![Coveralls](https://img.shields.io/coveralls/gajus/fast-printf.svg?style=flat-square)](https://coveralls.io/github/gajus/fast-printf)
[![NPM version](http://img.shields.io/npm/v/fast-printf.svg?style=flat-square)](https://www.npmjs.org/package/fast-printf)
[![Canonical Code Style](https://img.shields.io/badge/code%20style-canonical-blue.svg?style=flat-square)](https://github.com/gajus/canonical)
[![Twitter Follow](https://img.shields.io/twitter/follow/kuizinas.svg?style=social&label=Follow)](https://twitter.com/kuizinas)

[Fast](#benchmark) and spec-compliant `printf` implementation for Node.js and browser.

## Usage

```ts
import {
  printf,
} from 'fast-printf';

console.log(printf('foo %s', 'bar'));

```

## Benchmark

|**implementation**|**without_placeholders**|**with_string_placeholder**|**with_many_string_placeholders**|
|-|-|-|-|
|[`sprintf`](https://github.com/alexei/sprintf.js)|31,772,029|4,154,748|637,229|
|[`printf`](https://github.com/adaltas/node-printf)|651,970|373,615|160,795|
|[`fast-printf`](https://github.com/gajus/fast-printf)|78,068,540|11,820,632|2,552,386|

Results show operations per second (greater is better).

To run the benchmark yourself please see [`./benchmark`](./benchmark).
