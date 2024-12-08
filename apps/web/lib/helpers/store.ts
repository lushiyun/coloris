import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ColorState {
	accent: string;
	background: string;
	setAccent: (accent: string) => void;
	setBackground: (background: string) => void;
}

const useColorStore = create<ColorState>()(
	devtools(
		persist(
			(set) => ({
				accent: "#000000",
				background: "#ffffff",
				setAccent: (accent) => set({ accent }),
				setBackground: (background) => set({ background }),
			}),
			{ name: "coloris-store" },
		),
	),
);

export { useColorStore };
