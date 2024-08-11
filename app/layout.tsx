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
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
        </body>
    </html>
  );
}
