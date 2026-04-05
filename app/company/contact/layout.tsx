import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact PravRaha | Book a B2B Lead Generation Strategy Call",
  description:
    "Book a free strategy call with PravRaha. We combine B2B contact data, buyer intent signals, and SDR-led outreach to fill your pipeline with qualified meetings.",
  openGraph: {
    title: "Contact PravRaha | Book a B2B Lead Generation Strategy Call",
    description:
      "Book a free strategy call with PravRaha. We combine B2B contact data, buyer intent signals, and SDR-led outreach to fill your pipeline with qualified meetings.",
    images: [
      {
        url: "/conc.jpeg",
        width: 1200,
        height: 630,
        alt: "PravRaha - B2B Lead Generation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact PravRaha | Book a B2B Lead Generation Strategy Call",
    description:
      "Book a free strategy call with PravRaha. We combine B2B contact data, buyer intent signals, and SDR-led outreach to fill your pipeline with qualified meetings.",
    images: ["/conc.jpeg"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
