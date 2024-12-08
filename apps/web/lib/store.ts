import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ColorState {
	accent: string;
	neutral: string;
	background: string;
	setAccent: (accent: string) => void;
	setNeutral: (neutral: string) => void;
	setBackground: (background: string) => void;
}

const useColorStore = create<ColorState>()(
	devtools(
		persist(
			(set) => ({
				accent: "#000000",
				neutral: "#ffffff",
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
