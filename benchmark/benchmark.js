/* eslint-disable import/order */

const {
  add,
  complete,
  cycle,
  suite,
} = require('benny');
const clients = [
  require('./implementations/sprintf-js'),
  require('./implementations/printf'),
  require('./implementations/fast-printf'),
];

const tests = [
  'without_placeholders',
  'with_string_placeholder',
  'with_many_string_placeholders',
];

(async () => {
  const table = [
    '|**implementation**|' + tests
      .map((test) => {
        return '**' + test + '**';
      })
      .join('|') + '|',
    '|-|' + tests
      .map(() => {
        return '-';
      })
      .join('|') + '|',
  ];

  const clientResults = {};

  for (const test of tests) {
    const benchmarks = [];

    for (const client of clients) {
      benchmarks.push(
        add(
          client.name,
          client.tests[test],
        ),
      );
    }

    await suite(
      test,
      ...benchmarks,
      cycle(),
      complete((summary) => {
        for (const result of summary.results) {
          clientResults[result.name] = clientResults[result.name] || {};
          clientResults[result.name][summary.name] = result;
        }
      }),
    );
  }

  for (const client of clients) {
    const row = [
      '[`' + client.name + '`](' + client.url + ')',
    ];

    for (const test of tests) {
      row.push(new Intl.NumberFormat('en-US').format(clientResults[client.name][test].ops));
    }

    table.push(
      '|' + row.join('|') + '|',
    );
  }

  console.log(table.join('\n'));
})();
