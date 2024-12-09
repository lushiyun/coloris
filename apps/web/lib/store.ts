import { generateColors, type NeutralScaleName } from "coloris-js";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ColorState {
  accent: string;
  neutral: NeutralScaleName;
  background: string;
  setAccent: (accent: string) => void;
  setNeutral: (neutral: NeutralScaleName) => void;
  setBackground: (background: string) => void;
  setColorProperties: () => void;
}

const useColorStore = create<ColorState>()(
  devtools(
    persist(
      (set, get) => ({
        accent: "#000000",
        neutral: "sand",
        background: "#ffffff",
        setAccent: (accent) => {
          set({ accent });
          setColorProperties(accent, get().background, get().neutral);
        },
        setNeutral: (neutral) => {
          set({ neutral });
          setColorProperties(get().accent, get().background, neutral);
        },
        setBackground: (background) => {
          set({ background });
          setColorProperties(get().accent, get().background, get().neutral);
        },
        setColorProperties: () => {
          setColorProperties(get().accent, get().background, get().neutral);
        },
      }),
      { name: "coloris-store" },
    ),
  ),
);

function setColorProperties(
  accent: string,
  background: string,
  neutral: string,
) {
  const colors = generateColors({
    appearance: "light",
    accent,
    background,
    neutral,
  });
  const root = document.documentElement;

  const supportsOKLCH = window.CSS && CSS.supports("color", "oklch(0% 0 0)");
  const supportsP3 = window.CSS && CSS.supports("color", "p3(0 0 0)");

  if (supportsOKLCH) {
    colors.accentScaleWideGamut.forEach((color, i) => {
      root.style.setProperty(`--accent-${i + 1}`, color);
    });
    colors.grayScaleWideGamut.forEach((color, i) => {
      root.style.setProperty(`--neutral-${i + 1}`, color);
    });
    root.style.setProperty("--neutral-surface", colors.graySurfaceWideGamut);
    root.style.setProperty("--accent-surface", colors.accentSurfaceWideGamut);
  } else if (supportsP3) {
    colors.accentScaleAlphaWideGamut.forEach((color, i) => {
      root.style.setProperty(`--accent-a${i + 1}`, color);
    });
    colors.grayScaleAlphaWideGamut.forEach((color, i) => {
      root.style.setProperty(`--neutral-a${i + 1}`, color);
    });
  } else {
    colors.accentScale.forEach((color, i) => {
      root.style.setProperty(`--accent-${i + 1}`, color);
    });
    colors.accentScaleAlpha.forEach((color, i) => {
      root.style.setProperty(`--accent-a${i + 1}`, color);
    });
    colors.grayScale.forEach((color, i) => {
      root.style.setProperty(`--neutral-${i + 1}`, color);
    });
    colors.grayScaleAlpha.forEach((color, i) => {
      root.style.setProperty(`--neutral-a${i + 1}`, color);
    });
    root.style.setProperty("--neutral-surface", colors.graySurface);
    root.style.setProperty("--accent-surface", colors.accentSurface);
  }

  root.style.setProperty("--background", colors.background);
  root.style.setProperty("--accent-contrast", colors.accentContrast);
}

export { useColorStore };
