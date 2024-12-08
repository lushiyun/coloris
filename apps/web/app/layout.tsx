import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/global.css";
import { ThemeProvider } from "@/components/theme-provider";

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
	return (
		<html lang="en">
			<body
				className={`${generalSans.variable} container mx-auto p-5 flex flex-col h-screen gap-y-5`}
			>
				{children}
			</body>
		</html>
	);
}
