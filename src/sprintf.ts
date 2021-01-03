import {
  format as formatNumber,
} from 'mathjs';

type Flag = '+' | '-' | '-+' | '0';

const padValue = (value: string, width: number, flag: Flag): string => {
  if (flag === '-') {
    return value.padEnd(width, ' ');
  } else if (flag === '-+') {
    return ((Number(value) >= 0 ? '+' : '') + value).padEnd(width, ' ');
  } else if (flag === '+') {
    return ((Number(value) >= 0 ? '+' : '') + value).padStart(width, ' ');
  } else if (flag === '0') {
    return value.padStart(width, '0');
  } else {
    return value.padStart(width, ' ');
  }
};

export const sprintf = (subject: string, ...boundValues: any[]): string => {
  let index = -1;

  // eslint-disable-next-line complexity
  return subject.replaceAll(/(?:%(?<flag>([+0-]|-\+))?(?<width>\d+)?(?<precision>\.\d+)?(?<conversion>[%c-fosux]))|(\\%)/g, (match, ...args) => {
    if (match === '\\%' || match === '%%') {
      return '%';
    }

    const namedGroups = args[args.length - 1];

    const conversion = namedGroups.conversion;
    const flag = namedGroups.flag || null;
    const precision = namedGroups.precision ? Number.parseInt(namedGroups.precision.slice(1), 10) : null;
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
        boundValue = padValue(
          boundValue,
          width,
          flag,
        );
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
      if (precision !== null) {
        boundValue = formatNumber(
          boundValue,
          {
            notation: 'fixed',
            precision,
          },
        );
      }

      if (width !== null) {
        boundValue = padValue(
          boundValue,
          width,
          flag,
        );
      }

      return boundValue;
    } else if (conversion === 'i') {
      return boundValue;
    } else if (conversion === 'o') {
      return (Number.parseInt(boundValue, 10) >>> 0).toString(8);
    } else if (conversion === 's') {
      if (width !== null) {
        boundValue = padValue(
          boundValue,
          width,
          flag,
        );
      }

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
