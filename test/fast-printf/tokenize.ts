import test from 'ava';
import {
  tokenize,
} from '../../src/tokenize';

test('tokenizes a string without placeholders', (t) => {
  t.deepEqual(tokenize('foo bar'), [
    {
      literal: 'foo bar',
      type: 'literal',
    },
  ]);
});

test('tokenizes a string with placeholders (%%)', (t) => {
  t.deepEqual(tokenize('foo %% bar'), [
    {
      literal: 'foo % bar',
      type: 'literal',
    },
  ]);
});

test('tokenizes a string with placeholders (\\%)', (t) => {
  t.deepEqual(tokenize('foo \\% bar'), [
    {
      literal: 'foo % bar',
      type: 'literal',
    },
  ]);
});

test('tokenizes a string with a placeholder', (t) => {
  t.deepEqual(tokenize('foo %s bar'), [
    {
      literal: 'foo ',
      type: 'literal',
    },
    {
      conversion: 's',
      flag: null,
      placeholder: '%s',
      precision: null,
      type: 'placeholder',
      width: null,
    },
    {
      literal: ' bar',
      type: 'literal',
    },
  ]);
});

test('tokenizes a string with multiple placeholders', (t) => {
  t.deepEqual(tokenize('foo %s %s bar'), [
    {
      literal: 'foo ',
      type: 'literal',
    },
    {
      conversion: 's',
      flag: null,
      placeholder: '%s',
      precision: null,
      type: 'placeholder',
      width: null,
    },
    {
      literal: ' ',
      type: 'literal',
    },
    {
      conversion: 's',
      flag: null,
      placeholder: '%s',
      precision: null,
      type: 'placeholder',
      width: null,
    },
    {
      literal: ' bar',
      type: 'literal',
    },
  ]);
});

test('tokenizes a string containing only a placeholder', (t) => {
  t.deepEqual(tokenize('%s'), [
    {
      conversion: 's',
      flag: null,
      placeholder: '%s',
      precision: null,
      type: 'placeholder',
      width: null,
    },
  ]);
});

test('identifies flag (%+d)', (t) => {
  t.deepEqual(tokenize('%+d'), [
    {
      conversion: 'd',
      flag: '+',
      placeholder: '%+d',
      precision: null,
      type: 'placeholder',
      width: null,
    },
  ]);
});

test('identifies width (%1d)', (t) => {
  t.deepEqual(tokenize('%1d'), [
    {
      conversion: 'd',
      flag: null,
      placeholder: '%1d',
      precision: null,
      type: 'placeholder',
      width: 1,
    },
  ]);
});

test('identifies precision (%.1f)', (t) => {
  t.deepEqual(tokenize('%.1f'), [
    {
      conversion: 'f',
      flag: null,
      placeholder: '%.1f',
      precision: 1,
      type: 'placeholder',
      width: null,
    },
  ]);
});
