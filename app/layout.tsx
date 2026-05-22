import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://isledance.im";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Isle Dance | Community Dance Events in Isle of Man",
    template: "%s | Isle Dance",
  },
  description:
    "Isle Dance is the Isle of Man's vibrant community dance brand. Join cheerdance workshops, buy official merchandise, and be part of a growing local dance movement.",
  keywords: [
    "Isle Dance",
    "Isle of Man dance",
    "dance events Isle of Man",
    "cheerdance workshop",
    "Bethany Rushby",
    "dance community IOM",
    "dance workshops Isle of Man",
    "IOM dance",
    "dance classes Isle of Man",
    "Isle of Man events",
  ],
  authors: [{ name: "Isle Dance", url: BASE_URL }],
  creator: "Isle Dance",
  publisher: "Isle Dance",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BASE_URL,
    siteName: "Isle Dance",
    title: "Isle Dance | Community Dance Events in Isle of Man",
    description:
      "Isle Dance is the Isle of Man's vibrant community dance brand. Join cheerdance workshops, buy official merchandise, and be part of a growing local dance movement.",
    images: [
      {
        url: "/people-dancing.jpg",
        width: 1200,
        height: 630,
        alt: "Isle Dance – people dancing together in the Isle of Man",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isle Dance | Community Dance Events in Isle of Man",
    description:
      "Isle Dance is the Isle of Man's vibrant community dance brand. Join cheerdance workshops, buy official merchandise, and be part of a growing local dance movement.",
    images: ["/people-dancing.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Isle Dance",
  url: BASE_URL,
  logo: `${BASE_URL}/white-logo.png`,
  email: "info@isledance.im",
  telephone: "+447624311022",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Douglas",
    addressRegion: "Isle of Man",
    addressCountry: "IM",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61556144159393",
    "https://www.instagram.com/isle.dance",
    "https://www.tiktok.com/@isle.dance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
