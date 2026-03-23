import type { Metadata } from "next";
import { Barlow_Condensed, Space_Grotesk, Inter, Noto_Sans_KR, Playfair_Display, Rubik } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-rubik",
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "KATALYZE — Seoul's Culture-Commerce Festival | April 2027",
  description: "Where global brands meet Seoul's energy. K-fashion, K-beauty, music, street culture and global trade at DDP Seoul. 50,000+ attendees. April 2027.",
  openGraph: {
    title: "KATALYZE — Seoul's Culture-Commerce Festival",
    description: "Where global brands meet Seoul's energy. April 2027, DDP Seoul.",
    url: "https://katalyze.live",
    siteName: "KATALYZE",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KATALYZE — Seoul's Culture-Commerce Festival",
    description: "Where global brands meet Seoul's energy. April 2027, DDP Seoul.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${barlowCondensed.variable} ${rubik.variable} ${spaceGrotesk.variable} ${inter.variable} ${notoSansKR.variable} ${playfair.variable} font-outfit`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
