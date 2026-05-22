import type { Metadata } from "next";

const BASE_URL = "https://isledance.im";

export const metadata: Metadata = {
  title: "Shop – Official Merchandise",
  description:
    "Buy official Isle Dance merchandise. Hoodies (£32–£40), T-shirts (£20–£25) and water bottles (£10). Made to order and collected from Douglas, Isle of Man.",
  keywords: [
    "Isle Dance hoodie",
    "Isle Dance t-shirt",
    "Isle Dance merchandise",
    "dance merchandise Isle of Man",
    "IOM dance shop",
    "Isle Dance water bottle",
  ],
  alternates: {
    canonical: `${BASE_URL}/shop`,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: `${BASE_URL}/shop`,
    siteName: "Isle Dance",
    title: "Shop – Official Merchandise | Isle Dance",
    description:
      "Buy official Isle Dance merchandise. Hoodies, T-shirts and water bottles. Made to order and collected from Douglas, Isle of Man.",
    images: [
      {
        url: "/people-dancing.jpg",
        width: 1200,
        height: 630,
        alt: "Isle Dance official merchandise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop – Official Merchandise | Isle Dance",
    description:
      "Buy official Isle Dance merchandise. Hoodies, T-shirts and water bottles. Made to order and collected from Douglas, Isle of Man.",
    images: ["/people-dancing.jpg"],
  },
};

const productListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Isle Dance Official Merchandise",
  url: `${BASE_URL}/shop`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Isle Dance Hoodie",
        description:
          "Stay warm and stylish with the Isle Dance Hoodie. Available in kids and adult sizes. Made to order.",
        brand: { "@type": "Brand", name: "Isle Dance" },
        offers: {
          "@type": "AggregateOffer",
          lowPrice: "32.00",
          highPrice: "40.00",
          priceCurrency: "GBP",
          availability: "https://schema.org/InStock",
          url: `${BASE_URL}/shop`,
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Isle Dance T-Shirt",
        description:
          "Stay comfortable and stylish with the Isle Dance T-Shirt. Available in kids and adult sizes. Made to order.",
        brand: { "@type": "Brand", name: "Isle Dance" },
        offers: {
          "@type": "AggregateOffer",
          lowPrice: "20.00",
          highPrice: "25.00",
          priceCurrency: "GBP",
          availability: "https://schema.org/InStock",
          url: `${BASE_URL}/shop`,
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Isle Dance Water Bottle",
        description:
          "750ml BPA-free water bottle with Isle Dance branding. Made to order.",
        brand: { "@type": "Brand", name: "Isle Dance" },
        offers: {
          "@type": "Offer",
          price: "10.00",
          priceCurrency: "GBP",
          availability: "https://schema.org/InStock",
          url: `${BASE_URL}/shop`,
        },
      },
    },
  ],
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
      />
      {children}
    </>
  );
}
