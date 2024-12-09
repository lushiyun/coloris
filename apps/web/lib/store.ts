import { type NeutralScaleName } from "coloris-js";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { setColorProperties } from "./helpers/setColorProperties";

interface ColorState {
  accent: string;
  neutral: NeutralScaleName;
  background: string;
  setAccent: (accent: string) => void;
  setNeutral: (neutral: NeutralScaleName) => void;
  setBackground: (background: string) => void;
  setColorPropertiesFromClient: () => void;
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
        setColorPropertiesFromClient: () => {
          setColorProperties(get().accent, get().background, get().neutral);
        },
      }),
      { name: "coloris-store" },
    ),
  ),
);

export { useColorStore };
