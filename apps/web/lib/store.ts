import type { NeutralScaleName } from "coloris-js";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ColorState {
  accent: string;
  neutral: NeutralScaleName;
  background: string;
  setAccent: (accent: string) => void;
  setNeutral: (neutral: NeutralScaleName) => void;
  setBackground: (background: string) => void;
}

const useColorStore = create<ColorState>()(
  devtools(
    persist(
      (set) => ({
        accent: "#000000",
        neutral: "sand",
        background: "#ffffff",
        setAccent: (accent) => set({ accent }),
        setNeutral: (neutral) => set({ neutral }),
        setBackground: (background) => set({ background }),
      }),
      { name: "coloris-store" },
    ),
  ),
);

export { useColorStore };
