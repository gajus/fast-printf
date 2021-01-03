import test from 'ava';
import {
  sprintf,
} from '../../src/sprintf';

test('interpolates %c', (t) => {
  t.is(sprintf('%c', 'a'), 'a');
  t.is(sprintf('%c%c', 'a', 'b'), 'ab');
});

test('interpolates %d', (t) => {
  t.is(sprintf('%d', 123), '123');
});

test('interpolates %3d', (t) => {
  t.is(sprintf('%3d', 1), '  1');
  t.is(sprintf('%3d', 1_234), '1234');
});

test('interpolates %+3d', (t) => {
  t.is(sprintf('%+3d', 1), ' +1');
  t.is(sprintf('%+3d', 1_234), '+1234');
});

test('interpolates %+3d (negative number)', (t) => {
  t.is(sprintf('%+3d', -1), ' -1');
  t.is(sprintf('%+3d', -1_234), '-1234');
});

test('interpolates %-+3d', (t) => {
  t.is(sprintf('%-+3d', 1), '+1 ');
  t.is(sprintf('%-+3d', 1_234), '+1234');
});

test('interpolates %-+3d (negative number)', (t) => {
  t.is(sprintf('%-+3d', -1), '-1 ');
  t.is(sprintf('%-+3d', -1_234), '-1234');
});

test('interpolates %-3d', (t) => {
  t.is(sprintf('%-3d', 1), '1  ');
  t.is(sprintf('%-3d', 1_234), '1234');
});

test('interpolates %03d', (t) => {
  t.is(sprintf('%03d', 1), '001');
  t.is(sprintf('%03d', 1_234), '1234');
});

test('interpolates %e', (t) => {
  t.is(sprintf('%e', 52.8), '5.28e+1');
});

test('interpolates %f', (t) => {
  t.is(sprintf('%f', 52.8), '52.8');
});

test('interpolates %.1f', (t) => {
  t.is(sprintf('%.1f', 1.234_5), '1.2');
  t.is(sprintf('%.1f', 1.25), '1.3');
});

test('interpolates %5.1f', (t) => {
  t.is(sprintf('%5.1f', 1.234_5), '  1.2');
  t.is(sprintf('%5.1f', 1.25), '  1.3');
});

test('interpolates %+5.1f', (t) => {
  t.is(sprintf('%+5.1f', 1.234_5), ' +1.2');
  t.is(sprintf('%+5.1f', 1.25), ' +1.3');
});

test('interpolates %+5.1f (negative number)', (t) => {
  t.is(sprintf('%+5.1f', -1.234_5), ' -1.2');
  t.is(sprintf('%+5.1f', -1.25), ' -1.3');
});

test('interpolates %-+5.1f', (t) => {
  t.is(sprintf('%-+5.1f', 1.234_5), '+1.2 ');
  t.is(sprintf('%-+5.1f', 1.25), '+1.3 ');
});

test('interpolates %-+5.1f (negative number)', (t) => {
  t.is(sprintf('%-+5.1f', -1.234_5), '-1.2 ');
  t.is(sprintf('%-+5.1f', -1.25), '-1.3 ');
});

test('interpolates %-5.1f', (t) => {
  t.is(sprintf('%-5.1f', 1.234_5), '1.2  ');
  t.is(sprintf('%-5.1f', 1.25), '1.3  ');
});

test('interpolates %05.1f', (t) => {
  t.is(sprintf('%05.1f', 1.234_5), '001.2');
  t.is(sprintf('%05.1f', 1.25), '001.3');
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

test('interpolates %5s', (t) => {
  t.is(sprintf('%5s', 'foo'), '  foo');
});

test('interpolates %-5s', (t) => {
  t.is(sprintf('%-5s', 'foo'), 'foo  ');
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

test('does not interpolate unbound placeholders', (t) => {
  t.is(sprintf('%s %s %s %s', 'foo'), 'foo %s %s %s');
});
