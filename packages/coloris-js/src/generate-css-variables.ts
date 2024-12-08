import type { GeneratedColors } from './types.js';

function generateCssVariables(colors: GeneratedColors) {
  const cssVariables = `:root {
  /* Accent Scale */
${colors.accentScaleWideGamut
  .map((color: string, i: number) => `  --accent-${i + 1}: ${color};`)
  .join('\n')}

  /* Neutral Scale */
${colors.grayScaleWideGamut
  .map((color: string, i: number) => `  --neutral-${i + 1}: ${color};`)
  .join("\n")}

  /* Accent Scale Alpha */
${colors.accentScaleAlphaWideGamut
  .map((color: string, i: number) => `  --accent-a${i + 1}: ${color};`)
  .join('\n')}

  /* Neutral Scale Alpha */
${colors.grayScaleAlphaWideGamut
  .map((color: string, i: number) => `  --neutral-a${i + 1}: ${color};`)
  .join('\n')}

  /* Surfaces */
  --neutral-surface: ${colors.graySurfaceWideGamut};
  --accent-surface: ${colors.accentSurfaceWideGamut};

  /* Fallback for browsers that don't support P3 */
  @supports not (color: color(display-p3 1 1 1)) {
    /* Accent Scale */
${colors.accentScale
  .map((color: string, i: number) => `    --accent-${i + 1}: ${color};`)
  .join('\n')}

    /* Neutral Scale */
${colors.grayScale
  .map((color: string, i: number) => `    --neutral-${i + 1}: ${color};`)
  .join('\n')}

    /* Accent Scale Alpha */
${colors.accentScaleAlpha
  .map((color: string, i: number) => `    --accent-a${i + 1}: ${color};`)
  .join('\n')}

    /* Neutral Scale Alpha */
${colors.grayScaleAlpha
  .map((color: string, i: number) => `    --neutral-a${i + 1}: ${color};`)
  .join('\n')}

    /* Surfaces */
    --neutral-surface: ${colors.graySurface};
    --accent-surface: ${colors.accentSurface};
  }

  /* Common properties */
  --background: ${colors.background};
  --accent-contrast: ${colors.accentContrast};
}`;

  return cssVariables;
}

export { generateCssVariables };
