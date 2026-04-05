import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GTM Intelligence Platform for B2B SaaS Teams | PravRaha",
  description:
    "PravRaha's GTM platform combines ICP-based prospecting, B2B data enrichment, and SDR-led outreach in 4 steps, from target account list to booked meetings on your calendar.",
  openGraph: {
    title: "GTM Intelligence Platform for B2B SaaS Teams | PravRaha",
    description:
      "PravRaha's GTM platform combines ICP-based prospecting, B2B data enrichment, and SDR-led outreach in 4 steps, from target account list to booked meetings on your calendar.",
    images: [
      {
        url: "/prod.jpeg",
        width: 1200,
        height: 630,
        alt: "PravRaha - B2B Lead Generation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GTM Intelligence Platform for B2B SaaS Teams | PravRaha",
    description:
      "PravRaha's GTM platform combines ICP-based prospecting, B2B data enrichment, and SDR-led outreach in 4 steps, from target account list to booked meetings on your calendar.",
    images: ["/prod.jpeg"],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
