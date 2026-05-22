import type { Metadata } from "next";

const BASE_URL = "https://isledance.im";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Isle Dance. Email info@isledance.im, WhatsApp +44 7624 311022, or send us a message. Isle of Man dance community – we respond within 24 hours.",
  keywords: [
    "contact Isle Dance",
    "Isle Dance email",
    "Isle Dance phone",
    "Isle of Man dance contact",
    "Isle Dance WhatsApp",
  ],
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: `${BASE_URL}/contact`,
    siteName: "Isle Dance",
    title: "Contact Us | Isle Dance",
    description:
      "Get in touch with Isle Dance. Email us, WhatsApp us, or send a message online. Isle of Man dance community.",
    images: [
      {
        url: "/facebook-meta-twitter.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Isle Dance – Isle of Man dance community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Isle Dance",
    description:
      "Get in touch with Isle Dance. Email us, WhatsApp us, or send a message online. Isle of Man dance community.",
    images: ["/facebook-meta-twitter.jpg"],
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Isle Dance",
  url: `${BASE_URL}/contact`,
  description:
    "Contact page for Isle Dance – Isle of Man's community dance brand.",
  mainEntity: {
    "@type": "Organization",
    name: "Isle Dance",
    email: "info@isledance.im",
    telephone: "+447624311022",
    url: BASE_URL,
    sameAs: [
      "https://www.facebook.com/profile.php?id=61556144159393",
      "https://www.instagram.com/isle.dance",
      "https://www.tiktok.com/@isle.dance",
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      {children}
    </>
  );
}
