type ArrayOf12<T> = [T, T, T, T, T, T, T, T, T, T, T, T];

type GeneratedColors = {
  accentScale: ArrayOf12<string>;
  accentScaleAlpha: ArrayOf12<string>;
  accentScaleWideGamut: ArrayOf12<string>;
  accentScaleAlphaWideGamut: ArrayOf12<string>;
  accentContrast: string;
  grayScale: ArrayOf12<string>;
  grayScaleAlpha: ArrayOf12<string>;
  grayScaleWideGamut: ArrayOf12<string>;
  grayScaleAlphaWideGamut: ArrayOf12<string>;
  graySurface: string;
  graySurfaceWideGamut: string;
  accentSurface: string;
  accentSurfaceWideGamut: string;
  background: string;
};

type NeutralScaleName = 'gray' | 'mauve' | 'slate' | 'sage' | 'olive' | 'sand';

type ColorisArgs = {
  appearance: 'light' | 'dark';
  accent: string;
  neutral: NeutralScaleName;
  background: string;
};

export type { ArrayOf12, GeneratedColors, NeutralScaleName, ColorisArgs };
