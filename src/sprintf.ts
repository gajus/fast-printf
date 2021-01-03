import {
  format as formatNumber,
} from 'mathjs';

export const sprintf = (subject: string, ...boundValues: any[]): string => {
  let index = -1;

  return subject.replaceAll(/(?:%(?<flag>[+0-])?(?<width>\d+)?(?<precision>\.\d+)?(?<conversion>[%c-fosux]))|(\\%)/g, (match, ...args) => {
    if (match === '\\%' || match === '%%') {
      return '%';
    }

    const namedGroups = args[args.length - 1];

    const conversion = namedGroups.conversion;
    const flag = namedGroups.flag || null;
    const precision = namedGroups.precision ? Number.parseInt(namedGroups.precision, 10) : null;
    const width = namedGroups.width ? Number.parseInt(namedGroups.width, 10) : null;

    index++;

    let boundValue = boundValues[index];

    if (conversion === 'c') {
      if (boundValue.length !== 1) {
        throw new Error('%c must be bound to a single character');
      }

      return boundValue;
    } else if (conversion === 'd') {
      boundValue = String(boundValue);

      if (width !== null) {
        if (flag === '-') {
          boundValue = boundValue.padEnd(width, ' ');
        } else if (flag === '0') {
          boundValue = boundValue.padStart(width, '0');
        } else {
          boundValue = boundValue.padStart(width, ' ');
        }
      }

      return boundValue;
    } else if (conversion === 'e') {
      return formatNumber(
        boundValue,
        {
          notation: 'exponential',
        },
      );
    } else if (conversion === 'f') {
      return boundValue;
    } else if (conversion === 'i') {
      return boundValue;
    } else if (conversion === 'o') {
      return (Number.parseInt(boundValue, 10) >>> 0).toString(8);
    } else if (conversion === 's') {
      return boundValue;
    } else if (conversion === 'u') {
      return Number.parseInt(boundValue, 10) >>> 0;
    } else if (conversion === 'x') {
      return (Number.parseInt(boundValue, 10) >>> 0).toString(16);
    } else {
      throw new Error('Unknown format specifier.');
    }
  });
};
