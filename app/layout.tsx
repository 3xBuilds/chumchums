import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Lilita_One } from "next/font/google";
import "./globals.css";
import Providers from "@/utils/provider/Providers"

const inter = Lilita_One({ subsets: ["latin"], weight: ['400'] });

export const metadata: Metadata = {
  title: "Chum Chums",
  description: "A Borderless Family ○ Leading with Love ○ Embracing Creativity ○ Manifesting Dreams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* just add opengraph image and twitter */}
        <meta name="twitter:image" content="https://chumchums.xyz/tw-img.png" />
        <meta name="twitter:image:width" content="1500" />
        <meta name="twitter:image:height" content="1200" />
        <meta property="og:image" content="https://chumchums.xyz/og-img.png" />
        <meta name="og:image:width" content="1500" />
        <meta name="og:image:height" content="1200" />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
        </body>
    </html>
  );
}
