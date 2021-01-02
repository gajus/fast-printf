import test from 'ava';
import {
  sprintf,
} from '../../src/sprintf';

test('interpolates %c', (t) => {
  t.is(sprintf('%c', 'a'), 'a');
  t.is(sprintf('%c%c', 'a', 'b'), 'ab');
});

test('throws if %c is not a single character', (t) => {
  t.throws(() => {
    sprintf('%c', '');
  }, {
    message: '%c must be bound to a single character',
  });

  t.throws(() => {
    sprintf('%c', 'ab');
  }, {
    message: '%c must be bound to a single character',
  });
});

test('interpolates %d', (t) => {
  t.is(sprintf('%d', 123), '123');
});

test('interpolates %e', (t) => {
  t.is(sprintf('%e', 52.8), '5.28e+1');
});

test('interpolates %f', (t) => {
  t.is(sprintf('%f', 52.8), '52.8');
});

test('interpolates %i', (t) => {
  t.is(sprintf('%f', 123), '123');
});

test('interpolates %o', (t) => {
  t.is(sprintf('%o', 8), '10');
});

test('interpolates %s', (t) => {
  t.is(sprintf('%s', 'foo'), 'foo');
});

test('interpolates %u', (t) => {
  t.is(sprintf('%u', 0), '0');
  t.is(sprintf('%u', 1), '1');
  t.is(sprintf('%u', -1), '4294967295');
});

test('interpolates %x', (t) => {
  t.is(sprintf('%x', 255), 'ff');
});

test('%% prints %', (t) => {
  t.is(sprintf('%%'), '%');
});

test('%% does not advance value cursor', (t) => {
  t.is(sprintf('%% %s', 'foo'), '% foo');
});

test('\\% prints %', (t) => {
  t.is(sprintf('\\%'), '%');
});

test('\\% does not advance value cursor', (t) => {
  t.is(sprintf('\\% %s', 'foo'), '% foo');
});
