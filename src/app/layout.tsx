import type { Metadata, Viewport } from "next";
import { Archivo_Black, Fraunces, Instrument_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { ScrollToTop } from "@/components/ScrollToTop";
import { BRAND_FULL, BRAND_NAME, TAGLINE } from "@/lib/brand";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${BRAND_FULL} | Custom websites for local businesses`,
    template: `%s | ${BRAND_NAME}`,
  },
  description:
    "COR Web Solutions builds custom websites for local businesses. SEO work helps restaurants, trades, and shops get found when people search.",
  keywords: [
    "custom website design",
    "local SEO",
    "AI visibility",
    "small business websites",
    "contractor website design",
    "restaurant website design",
  ],
  authors: [{ name: BRAND_NAME }],
  creator: BRAND_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: BRAND_NAME,
    title: `${BRAND_FULL} | Custom websites for local businesses`,
    description: TAGLINE,
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND_FULL,
    description: TAGLINE,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    types: {
      "text/markdown": "/llms.txt",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F5F2",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${fraunces.variable} ${archivoBlack.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-chalk font-sans text-ink">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <ScrollToTop />
        <Header />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
      <GoogleAnalytics />
    </html>
  );
}
