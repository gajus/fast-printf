/**
 * Copy function from deprecated `boolean` npm package v3.2.0 to avoid breaking changes.
 *
 * @see https://www.npmjs.com/package/boolean?activeTab=code
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- any from source `boolean` package v3.2.0
export const boolean = function (value: any): boolean {
  switch (Object.prototype.toString.call(value)) {
    case '[object String]':
      return ['true', 't', 'yes', 'y', 'on', '1'].includes(
        value.trim().toLowerCase(),
      );
    case '[object Number]':
      return value.valueOf() === 1;

    case '[object Boolean]':
      return value.valueOf();

    default:
      return false;
  }
};
