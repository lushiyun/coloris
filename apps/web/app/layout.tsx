import type { Metadata } from "next";
import localFont from "next/font/local";
import { ViewTransitions } from "next-view-transitions";
import { Header } from "@/components/layout/header";
import "@/styles/global.css";
import { Color } from "@/components/features/color";
import { ThemeProvider } from "@/components/layout/theme-provider";

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
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${generalSans.variable} mx-auto max-w-[calc(65ch+3rem)] px-6`}
        >
          <ThemeProvider />
          <Header />
          <main className="py-6">
            <div className="space-y-6">
              <Color />
              {children}
            </div>
          </main>
        </body>
      </html>
    </ViewTransitions>
  );
}
