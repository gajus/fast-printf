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
