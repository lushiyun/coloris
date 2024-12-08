import * as RadixColors from '@radix-ui/colors';
import Color from 'colorjs.io';
import type { ArrayOf12, NeutralScaleName } from './types.js';

const arrayOf12 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as const;

const grayScaleNames = [
  'gray',
  'mauve',
  'slate',
  'sage',
  'olive',
  'sand',
] as NeutralScaleName[];

const scaleNames = [
  ...grayScaleNames,
  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'jade',
  'green',
  'grass',
  'brown',
  'orange',
  'sky',
  'mint',
  'lime',
  'yellow',
  'amber',
] as const;

const lightColors = Object.fromEntries(
  scaleNames.map((scaleName) => [
    scaleName,
    Object.values(RadixColors[`${scaleName}P3`]).map((str) =>
      new Color(str).to('oklch'),
    ),
  ]),
) as Record<(typeof scaleNames)[number], ArrayOf12<Color>>;

const darkColors = Object.fromEntries(
  scaleNames.map((scaleName) => [
    scaleName,
    Object.values(RadixColors[`${scaleName}DarkP3`]).map((str) =>
      new Color(str).to('oklch'),
    ),
  ]),
) as Record<(typeof scaleNames)[number], ArrayOf12<Color>>;

const lightGrayColors = Object.fromEntries(
  grayScaleNames.map((scaleName) => [
    scaleName,
    Object.values(RadixColors[`${scaleName}P3`]).map((str) =>
      new Color(str).to('oklch'),
    ),
  ]),
) as Record<(typeof grayScaleNames)[number], ArrayOf12<Color>>;

const darkGrayColors = Object.fromEntries(
  grayScaleNames.map((scaleName) => [
    scaleName,
    Object.values(RadixColors[`${scaleName}DarkP3`]).map((str) =>
      new Color(str).to('oklch'),
    ),
  ]),
) as Record<(typeof grayScaleNames)[number], ArrayOf12<Color>>;

export {
  arrayOf12,
  grayScaleNames,
  scaleNames,
  lightColors,
  darkColors,
  lightGrayColors,
  darkGrayColors,
};
