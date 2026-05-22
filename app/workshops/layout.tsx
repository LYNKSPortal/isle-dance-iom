import type { Metadata } from "next";

const BASE_URL = "https://isledance.im";

export const metadata: Metadata = {
  title: "Dance Workshops",
  description:
    "Book your place at Isle Dance cheerdance workshops with Bethany Rushby in the Isle of Man. Sessions for Ages 9 & Under (8:30am) and Ages 10 & Over (9:30am) on 19th July 2026 at The Roundhouse Sports Hall.",
  keywords: [
    "cheerdance workshop Isle of Man",
    "Bethany Rushby workshop",
    "dance workshop IOM",
    "Isle of Man kids dance class",
    "Roundhouse Sports Hall dance",
    "Isle Dance workshop registration",
  ],
  alternates: {
    canonical: `${BASE_URL}/workshops`,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: `${BASE_URL}/workshops`,
    siteName: "Isle Dance",
    title: "Dance Workshops | Isle Dance",
    description:
      "Book your place at Isle Dance cheerdance workshops with Bethany Rushby. 19th July 2026 at The Roundhouse Sports Hall, Isle of Man.",
    images: [
      {
        url: "/facebook-meta-twitter.jpg",
        width: 1200,
        height: 630,
        alt: "Isle Dance cheerdance workshop with Bethany Rushby",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dance Workshops | Isle Dance",
    description:
      "Book your place at Isle Dance cheerdance workshops with Bethany Rushby. 19th July 2026 at The Roundhouse Sports Hall, Isle of Man.",
    images: ["/facebook-meta-twitter.jpg"],
  },
};

const eventSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Isle Dance Cheerdance Workshop – Ages 9 & Under",
    description:
      "An energetic cheerdance workshop for ages 9 & under with Bethany Rushby. Learn exciting routines and improve your technique in a supportive environment.",
    startDate: "2026-07-19T08:30:00",
    endDate: "2026-07-19T09:15:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "The Roundhouse Sports Hall",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Isle of Man",
        addressCountry: "IM",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Isle Dance",
      url: BASE_URL,
    },
    performer: {
      "@type": "Person",
      name: "Bethany Rushby",
    },
    url: `${BASE_URL}/workshops`,
  },
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Isle Dance Cheerdance Workshop – Ages 10 & Over",
    description:
      "An energetic cheerdance workshop for ages 10 & over with Bethany Rushby. Learn exciting routines and improve your technique in a supportive environment.",
    startDate: "2026-07-19T09:30:00",
    endDate: "2026-07-19T10:15:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "The Roundhouse Sports Hall",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Isle of Man",
        addressCountry: "IM",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Isle Dance",
      url: BASE_URL,
    },
    performer: {
      "@type": "Person",
      name: "Bethany Rushby",
    },
    url: `${BASE_URL}/workshops`,
  },
];

export default function WorkshopsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      {children}
    </>
  );
}
