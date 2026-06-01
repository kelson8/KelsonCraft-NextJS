import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// app/layout.tsx
import { ThemeModeScript } from 'flowbite-react';

// import Font Awesome CSS
// https://stackoverflow.com/questions/44752189/how-to-add-font-awesome-to-next-js-project
import "@fortawesome/fontawesome-svg-core/styles.css";
// This doesn't seem to be needed.
// import { config } from "@fortawesome/fontawesome-svg-core";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KelsonCraft",
  description: "New and improved KelsonCraft website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
    <head>
      <ThemeModeScript />
    </head>

      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
