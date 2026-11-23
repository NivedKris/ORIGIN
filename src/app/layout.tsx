import type { Metadata } from "next";
import { Doto, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Dot-matrix display face + terminal mono for body copy
const doto = Doto({ subsets: ["latin"], variable: "--font-doto", weight: "variable", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jbm", display: "swap" });

export const metadata: Metadata = {
  title: "Origin // Portfolio",
  description: "High-end space and Apple inspired digital portfolio for Nived Krishna.",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" }
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${doto.variable} ${mono.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
