import type { GeneratedColors } from "./types.js";

function generateCssVariables(colors: GeneratedColors) {
	const cssVariables = `
    :root {
      /* Base colors using P3 and OKLCH */
      /* Accent Scale */
      ${colors.accentScaleWideGamut
				.map((color: string, i: number) => `--accent-${i + 1}: ${color};`)
				.join("\n        ")}

      /* Gray Scale */
      ${colors.grayScaleWideGamut
				.map((color: string, i: number) => `--neutral-${i + 1}: ${color};`)
				.join("\n        ")}

      /* Accent Scale Alpha */
      ${colors.accentScaleAlphaWideGamut
				.map((color: string, i: number) => `--accent-alpha-${i + 1}: ${color};`)
				.join("\n        ")}

      /* Gray Scale Alpha */
      ${colors.grayScaleAlphaWideGamut
				.map(
					(color: string, i: number) => `--neutral-alpha-${i + 1}: ${color};`,
				)
				.join("\n        ")}

      /* Surfaces */
      --gray-surface: ${colors.graySurfaceWideGamut};
      --accent-surface: ${colors.accentSurfaceWideGamut};

      /* Fallback for browsers that don't support OKLCH */
      @supports not (background-color: oklch(0% 0 0)) {
        /* Accent Scale */
        ${colors.accentScale
					.map((color: string, i: number) => `--accent-${i + 1}: ${color};`)
					.join("\n        ")}

        /* Gray Scale */
        ${colors.grayScale
					.map((color: string, i: number) => `--neutral-${i + 1}: ${color};`)
					.join("\n        ")}
      }

      /* Fallback for browsers that don't support P3 */
      @supports not (color: color(display-p3 1 1 1)) {
        /* Accent Scale Alpha */
        ${colors.accentScaleAlpha
					.map(
						(color: string, i: number) => `--accent-alpha-${i + 1}: ${color};`,
					)
					.join("\n        ")}

        /* Gray Scale Alpha */
        ${colors.grayScaleAlpha
					.map(
						(color: string, i: number) => `--neutral-alpha-${i + 1}: ${color};`,
					)
					.join("\n        ")}

        /* Surfaces */
        --neutral-surface: ${colors.graySurface};
        --accent-surface: ${colors.accentSurface};
      }

      /* Common properties that don't need P3 */
      --background: ${colors.background};
      --accent-contrast: ${colors.accentContrast};
    }
  `;

	return cssVariables;
}

export { generateCssVariables };
