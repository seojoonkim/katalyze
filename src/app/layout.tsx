import type { Metadata } from "next";
import { Barlow_Condensed, Space_Grotesk, Inter, Noto_Sans_KR, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-noto-kr",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "KATALYZE — Seoul's Culture-Commerce Convergence",
  description: "The world's brands. Seoul's energy. One weekend that changes everything. April 2027, DDP Seoul.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${barlowCondensed.variable} ${spaceGrotesk.variable} ${inter.variable} ${notoSansKR.variable} ${playfair.variable} font-outfit`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
