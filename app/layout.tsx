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
        <meta name="twitter:image" content="https://chumchums.xyz/meta-image.png" />
        <meta name="twitter:image:width" content="2400" />
        <meta name="twitter:image:height" content="1260" />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="og:image" content="https://chumchums.xyz/meta-image.png" />
        <meta name="og:image:width" content="2400" />
        <meta name="og:image:height" content="1260" />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
        </body>
    </html>
  );
}
