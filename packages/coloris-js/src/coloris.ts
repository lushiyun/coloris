import { generateColors } from './generate-colors.js';
import { generateCssVariables } from './generate-css-variables.js';
import type { NeutralScaleName } from './types.js';

function coloris(args: {
  appearance: 'light' | 'dark';
  accent: string;
  neutral: NeutralScaleName;
  background: string;
}) {
  const colors = generateColors(args);
  return generateCssVariables(colors);
}

export { coloris };
