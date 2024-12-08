import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/global.css";
import { generateColors } from "coloris-js";
import { generateCssVariables } from "coloris-js";
import { Header } from "@/components/header";
import { ColorSwatches } from "@/components/features/color-swatches";

const generalSans = localFont({
	src: "./fonts/GeneralSans.woff2",
	variable: "--font-general-sans",
});

export const metadata: Metadata = {
	title: "Coloris",
	description: "A color palette generator",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cssVariables = generateCssVariables(
		generateColors({
			appearance: "light",
			accent: "#000000",
			background: "#ffffff",
		}),
	);

	return (
		<html lang="en">
			<body
				className={`${generalSans.variable} flex flex-col min-h-screen container mx-auto p-6`}
			>
				<style global={true}>{cssVariables}</style>
				<Header />
				<main className="grow flex gap-x-6">
					<div className="flex flex-col gap-6 sticky top-0">
						<ColorSwatches />

						<div className="flex-shrink-0 flex flex-col gap-1.5 text-sm">
						<a
							href="http://shiyunlu.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-fg-secondary hover:text-fg-primary transition-colors"
						>
							NPM
							</a>

							<a
								href="https://github.com/shiyunlu/coloris-js"
								target="_blank"
								rel="noopener noreferrer"
								className="text-fg-secondary hover:text-fg-primary transition-colors"
							>
								Github
							</a>
						</div>
					</div>
					{children}
				</main>
			</body>
		</html>
	);
}
