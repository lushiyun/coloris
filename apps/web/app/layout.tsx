import type { Metadata } from "next";
import localFont from "next/font/local";
import { ViewTransitions } from "next-view-transitions";
import { Header } from "@/components/header";
import { ColorSwatches } from "@/components/features/color-swatches";
import "@/styles/global.css";
import { Footer } from "@/components/footer";

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
          className={`${generalSans.variable} container mx-auto flex min-h-screen flex-col px-6`}
        >
          <Header />
          <main className="flex grow gap-x-6">
            <div className="sticky top-14 flex h-fit w-45 justify-center">
              <ColorSwatches />
            </div>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
