export const sprintf = (subject, ...args) => {
  let index = -1;

  return subject.replaceAll(/(%c)/g, (match, parameter, offset) => {
    index++;

    if (match === '%c') {
      const value = args[index];

      if (value.length !== 1) {
        throw new Error('%c must be bound to a single character');
      }

      return args[index];
    } else {
      throw new Error('Unknown format specifier.');
    }
  });
};
