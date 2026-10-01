import type { Metadata } from "next";
import { Big_Shoulders, Roboto } from "next/font/google";
import "./globals.css";

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  // next/font has no metrics for Big Shoulders, so it can't generate an adjusted fallback.
  adjustFontFallback: false,
  fallback: ["Arial Narrow", "sans-serif"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Althaf Mohamed Umer — Full-Stack Developer",
  description:
    "Full-stack developer building fast, scalable web apps with React, Next.js, Node.js and Django — from pixel to production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bigShoulders.variable} ${roboto.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
