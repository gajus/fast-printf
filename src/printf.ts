import {
  format as formatNumber,
} from 'mathjs';
import {
  tokenize,
} from './tokenize';
import {
  Token,
  Flag,
} from './types';

const padValue = (value: string, width: number, flag: Flag | null): string => {
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

const cache: Record<string, Token[]> = {};

export const printf = (subject: string, ...boundValues: string[] | number[]): string => {
  let tokens = cache[subject];

  if (!tokens) {
    tokens = cache[subject] = tokenize(subject);
  }

  let index = -1;
  let result = '';

  for (const token of tokens) {
    if (token.type === 'literal') {
      result += token.literal;
    } else {
      index++;

      let boundValue = boundValues[index];

      if (boundValue === undefined) {
        result += token.placeholder;
      } else if (token.conversion === 'c') {
        result += boundValue;
      } else if (token.conversion === 'C') {
        result += String(boundValue).toUpperCase();
      } else if (token.conversion === 'd') {
        boundValue = String(boundValue);

        if (token.width !== null) {
          boundValue = padValue(
            boundValue,
            token.width,
            token.flag,
          );
        }

        result += boundValue;
      } else if (token.conversion === 'e') {
        result += formatNumber(
          boundValue,
          {
            notation: 'exponential',
          },
        );
      } else if (token.conversion === 'f') {
        if (token.precision !== null) {
          boundValue = formatNumber(
            boundValue,
            {
              notation: 'fixed',
              precision: token.precision,
            },
          );
        }

        if (token.width !== null) {
          boundValue = padValue(
            String(boundValue),
            token.width,
            token.flag,
          );
        }

        result += boundValue;
      } else if (token.conversion === 'i') {
        result += boundValue;
      } else if (token.conversion === 'o') {
        result += (Number.parseInt(String(boundValue), 10) >>> 0).toString(8);
      } else if (token.conversion === 's') {
        if (token.width !== null) {
          boundValue = padValue(
            String(boundValue),
            token.width,
            token.flag,
          );
        }

        result += boundValue;
      } else if (token.conversion === 'u') {
        result += Number.parseInt(String(boundValue), 10) >>> 0;
      } else if (token.conversion === 'x') {
        result += (Number.parseInt(String(boundValue), 10) >>> 0).toString(16);
      } else {
        throw new Error('Unknown format specifier.');
      }
    }
  }

  return result;
};
