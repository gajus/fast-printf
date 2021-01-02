export const sprintf = (subject: string, ...args: any[]): string => {
  let index = -1;

  return subject.replaceAll(/(%c)/g, (match) => {
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
