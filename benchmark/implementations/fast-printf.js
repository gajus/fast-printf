const {
  printf,
} = require('fast-printf');

module.exports = {
  name: 'fast-printf',
  tests: {
    with_many_string_placeholders: () => {
      return printf('foo %s %s %s', 'bar', 'baz', 'qux');
    },
    with_string_placeholder: () => {
      return printf('foo %s', 'bar');
    },
    without_placeholders: () => {
      return printf('foo bar baz');
    },
  },
  url: 'https://github.com/gajus/fast-printf',
};
