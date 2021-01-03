# fast-printf

[![Travis build status](http://img.shields.io/travis/gajus/fast-printf/master.svg?style=flat-square)](https://travis-ci.org/gajus/fast-printf)
[![Coveralls](https://img.shields.io/coveralls/gajus/fast-printf.svg?style=flat-square)](https://coveralls.io/github/gajus/fast-printf)
[![NPM version](http://img.shields.io/npm/v/fast-printf.svg?style=flat-square)](https://www.npmjs.org/package/fast-printf)
[![Canonical Code Style](https://img.shields.io/badge/code%20style-canonical-blue.svg?style=flat-square)](https://github.com/gajus/canonical)
[![Twitter Follow](https://img.shields.io/twitter/follow/kuizinas.svg?style=social&label=Follow)](https://twitter.com/kuizinas)

Fast and spec-compliant printf implementation for Node.js and browser.

## Usage

```ts
import {
  printf,
} from 'fast-printf';

console.log(printf('foo %s', 'bar'));

```
