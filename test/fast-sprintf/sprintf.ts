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
