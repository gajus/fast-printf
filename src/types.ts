/* eslint-disable import/exports-last */

export type Flag = '+' | '-' | '-+' | '0';

type LiteralToken = {
  type: 'literal',
  literal: string,
};

type PlaceholderToken = {
  conversion: string,
  flag: Flag | null,
  placeholder: string,
  precision: number | null,
  type: 'placeholder',
  width: number | null,
};

export type Token = LiteralToken | PlaceholderToken;
