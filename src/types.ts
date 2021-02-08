export type Flag = '-' | '-+' | '+' | '0';

type LiteralToken = {
  type: 'literal',
  literal: string,
};

export type PlaceholderToken = {
  conversion: string,
  flag: Flag | null,
  placeholder: string,
  position: number,
  precision: number | null,
  type: 'placeholder',
  width: number | null,
};

export type Token = LiteralToken | PlaceholderToken;
