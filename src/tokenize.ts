import type {
  Token,
} from './types';

const TokenRule = /(?:%(?<flag>([+0-]|-\+))?(?<width>\d+)?(?<precision>\.\d+)?(?<conversion>[%BCEb-fosux]))|(\\%)/g;

export const tokenize = (subject: string): Token[] => {
  let matchResult;

  const tokens: Token[] = [];

  let lastIndex = 0;

  let lastToken: Token | null = null;

  while ((matchResult = TokenRule.exec(subject)) !== null) {
    if (matchResult.index > lastIndex) {
      lastToken = {
        literal: subject.slice(lastIndex, matchResult.index),
        type: 'literal',
      };

      tokens.push(lastToken);
    }

    const match = matchResult[0];

    lastIndex = matchResult.index + match.length;

    if (match === '\\%' || match === '%%') {
      if (lastToken && lastToken.type === 'literal') {
        lastToken.literal += '%';
      } else {
        lastToken = {
          literal: '%',
          type: 'literal',
        };

        tokens.push(lastToken);
      }
    } else if (matchResult.groups) {
      lastToken = {
        conversion: matchResult.groups.conversion,
        flag: matchResult.groups.flag as any || null,
        placeholder: match,
        precision: matchResult.groups.precision ? Number.parseInt(matchResult.groups.precision.slice(1), 10) : null,
        type: 'placeholder',
        width: matchResult.groups.width ? Number.parseInt(matchResult.groups.width, 10) : null,
      };

      tokens.push(lastToken);
    }
  }

  if (lastIndex < subject.length - 1) {
    if (lastToken && lastToken.type === 'literal') {
      lastToken.literal += subject.slice(lastIndex);
    } else {
      tokens.push({
        literal: subject.slice(lastIndex),
        type: 'literal',
      });
    }
  }

  return tokens;
};
