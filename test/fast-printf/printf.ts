import test from 'ava';
import {
  printf,
} from '../../src/printf';

test('interpolates %b', (t) => {
  t.is(printf('%b', true), 'true');
  t.is(printf('%b', false), 'false');
  t.is(printf('%b', 1), 'true');
  t.is(printf('%b', 0), 'false');
});

test('interpolates %B', (t) => {
  t.is(printf('%B', true), 'TRUE');
  t.is(printf('%B', false), 'FALSE');
  t.is(printf('%B', 1), 'TRUE');
  t.is(printf('%B', 0), 'FALSE');
});

test('interpolates %c', (t) => {
  t.is(printf('%c', 'a'), 'a');
  t.is(printf('%c%c', 'a', 'b'), 'ab');
});

test('interpolates %C', (t) => {
  t.is(printf('%C', 'a'), 'A');
});

test('interpolates %d', (t) => {
  t.is(printf('%d', 123), '123');
});

test('interpolates %d (removes fractional digits)', (t) => {
  t.is(printf('%d', 123.567), '123');
});

test('interpolates %3d', (t) => {
  t.is(printf('%3d', 1), '  1');
  t.is(printf('%3d', 1_234), '1234');
});

test('interpolates %+3d', (t) => {
  t.is(printf('%+3d', 1), ' +1');
  t.is(printf('%+3d', 1_234), '+1234');
});

test('interpolates %+3d (negative number)', (t) => {
  t.is(printf('%+3d', -1), ' -1');
  t.is(printf('%+3d', -1_234), '-1234');
});

test('interpolates %-+3d', (t) => {
  t.is(printf('%-+3d', 1), '+1 ');
  t.is(printf('%-+3d', 1_234), '+1234');
});

test('interpolates %-+3d (negative number)', (t) => {
  t.is(printf('%-+3d', -1), '-1 ');
  t.is(printf('%-+3d', -1_234), '-1234');
});

test('interpolates %-3d', (t) => {
  t.is(printf('%-3d', 1), '1  ');
  t.is(printf('%-3d', 1_234), '1234');
});

test('interpolates %03d', (t) => {
  t.is(printf('%03d', 1), '001');
  t.is(printf('%03d', 1_234), '1234');
});

test('interpolates %e', (t) => {
  t.is(printf('%e', 52.8), '5.28e+1');
});

test('interpolates %E', (t) => {
  t.is(printf('%E', 52.8), '5.28E+1');
});

test('interpolates %f', (t) => {
  t.is(printf('%f', 52.8), '52.8');
});

test('interpolates %.1f', (t) => {
  t.is(printf('%.1f', 1.234_5), '1.2');
  t.is(printf('%.1f', 1.25), '1.3');
});

test('interpolates %5.1f', (t) => {
  t.is(printf('%5.1f', 1.234_5), '  1.2');
  t.is(printf('%5.1f', 1.25), '  1.3');
});

test('interpolates %+5.1f', (t) => {
  t.is(printf('%+5.1f', 1.234_5), ' +1.2');
  t.is(printf('%+5.1f', 1.25), ' +1.3');
});

test('interpolates %+5.1f (negative number)', (t) => {
  t.is(printf('%+5.1f', -1.234_5), ' -1.2');
  t.is(printf('%+5.1f', -1.25), ' -1.3');
});

test('interpolates %-+5.1f', (t) => {
  t.is(printf('%-+5.1f', 1.234_5), '+1.2 ');
  t.is(printf('%-+5.1f', 1.25), '+1.3 ');
});

test('interpolates %-+5.1f (negative number)', (t) => {
  t.is(printf('%-+5.1f', -1.234_5), '-1.2 ');
  t.is(printf('%-+5.1f', -1.25), '-1.3 ');
});

test('interpolates %-5.1f', (t) => {
  t.is(printf('%-5.1f', 1.234_5), '1.2  ');
  t.is(printf('%-5.1f', 1.25), '1.3  ');
});

test('interpolates %05.1f', (t) => {
  t.is(printf('%05.1f', 1.234_5), '001.2');
  t.is(printf('%05.1f', 1.25), '001.3');
});

test('interpolates %i', (t) => {
  t.is(printf('%f', 123), '123');
});

test('interpolates %o', (t) => {
  t.is(printf('%o', 8), '10');
});

test('interpolates %s', (t) => {
  t.is(printf('%s', 'foo'), 'foo');
});

test('interpolates %S', (t) => {
  t.is(printf('%S', 'foo'), 'FOO');
});

test('interpolates %5s', (t) => {
  t.is(printf('%5s', 'foo'), '  foo');
});

test('interpolates %-5s', (t) => {
  t.is(printf('%-5s', 'foo'), 'foo  ');
});

test('interpolates %u', (t) => {
  t.is(printf('%u', 0), '0');
  t.is(printf('%u', 1), '1');
  t.is(printf('%u', -1), '4294967295');
});

test('interpolates %x', (t) => {
  t.is(printf('%x', 255), 'ff');
});

test('interpolates %5x', (t) => {
  t.is(printf('%5x', 255), '   ff');
});

test('%% prints %', (t) => {
  t.is(printf('%%'), '%');
});

test('%%s prints %s', (t) => {
  t.is(printf('%%s'), '%s');
});

test('%% does not advance value cursor', (t) => {
  t.is(printf('%% %s', 'foo'), '% foo');
});

test('\\% prints %', (t) => {
  t.is(printf('\\%'), '%');
});

test('\\% does not advance value cursor', (t) => {
  t.is(printf('\\% %s', 'foo'), '% foo');
});

test('does not interpolate unbound placeholders', (t) => {
  t.is(printf('%s %s %s %s', 'foo'), 'foo %s %s %s');
});

test('%2$s %1$s', (t) => {
  t.is(printf('%2$s %1$s', 'bar', 'foo'), 'foo bar');
});
