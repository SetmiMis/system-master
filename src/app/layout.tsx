import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://system-master-mu.vercel.app"),
  title: "RF Connectors, AV Cables & Multimedia Hardware — Setmi India",
  description:
    "ISO 9001:2015 certified supplier of RF connectors (BNC, UHF, SMA, GX), solar MC4 connectors and AV cables since 1983. Pan-India dispatch, live prices, bulk quotes.",
  alternates: { canonical: "/" },
  openGraph: { title: "Setmi India — RF connectors & AV cables since 1983", images: ["/products/hero.png"] },
};

export const viewport = { themeColor: "#013556" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink"><SmoothScroll />
        {children}
      </body>
    </html>
  );
}
