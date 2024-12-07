import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";

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
      <body className={`${generalSans.variable}`}>{children}</body>
    </html>
  );
}
