const sprintf = require('printf');

module.exports = {
  name: 'printf',
  tests: {
    with_many_string_placeholders: () => {
      return sprintf(
        'foo %s %s %s %s %s %s %s',
        'bar',
        'baz',
        'qux',
        'quux',
        'quuz',
        'corge',
        'grault',
      );
    },
    with_string_placeholder: () => {
      return sprintf('foo %s', 'bar');
    },
    without_placeholders: () => {
      return sprintf('foo bar baz');
    },
  },
  url: 'https://github.com/adaltas/node-printf',
};
