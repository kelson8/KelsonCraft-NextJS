import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// app/layout.tsx
// import { ThemeModeScript } from 'flowbite-react';

// import Font Awesome CSS
// https://stackoverflow.com/questions/44752189/how-to-add-font-awesome-to-next-js-project
import "@fortawesome/fontawesome-svg-core/styles.css";
import {Suspense} from "react";
// import {theme} from "flowbite-react";
// import {cookies} from "next/headers";
import NextThemeProvider from "@/app/provider";
import {ThemeScript} from "@/components/theme-script";
// import {LogUserIp} from "@/components/get-user-ip-server";
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
  title: {
    default: "KelsonCraft",
    template: "%s | KelsonCraft",
    absolute: ""
  },

  description: "New and improved KelsonCraft website",

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
      },
    ],
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const cookieStore = cookies();
  // const theme = cookieStore.get("theme") ? cookieStore.get("theme")!.value : Theme;


  return (
    <html suppressHydrationWarning
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >

    {/* I guess I didn't have this working properly before. */}
    <head>
      <ThemeScript />
    </head>

      {/*<body className="min-h-full flex flex-col">{children}</body>*/}

      {/* Placed suspense here
      https://www.reddit.com/r/nextjs/comments/1fycva9/comment/mjwck8r/
      This fixes the issues with docker. */}
      <Suspense>
          <body
              className={`${geistSans.variable} ${geistMono.variable} antialiased"`}>

          {/* This is breaking some of my pages like test/localstorage-test.tsx */}
          <NextThemeProvider>
            {children}

            {/* What the hell, this just works now?
            Well this only works on the first page load, not when a user goes to other pages.
            */}
            {/*{LogUserIp("Website")}*/}
          </NextThemeProvider>
          </body>


      </Suspense>


    </html>
  );
}
