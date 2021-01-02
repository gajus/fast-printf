import {
  format as formatNumber,
} from 'mathjs';

export const sprintf = (subject: string, ...args: any[]): string => {
  let index = -1;

  return subject.replaceAll(/(%[c-e])/g, (match) => {
    index++;

    const boundValue = args[index];

    if (match === '%c') {
      if (boundValue.length !== 1) {
        throw new Error('%c must be bound to a single character');
      }

      return boundValue;
    } else if (match === '%d') {
      return boundValue;
    } else if (match === '%e') {
      return formatNumber(
        boundValue,
        {
          notation: 'exponential',
        },
      );
    } else {
      throw new Error('Unknown format specifier.');
    }
  });
};
