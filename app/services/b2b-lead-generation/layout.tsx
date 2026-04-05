import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Lead Generation Services for SaaS Teams | PravRaha",
  description:
    "Book a free strategy call with PravRaha. We combine proprietary B2B contact data, buyer intent signals, Account & Lead Intelligence and SDR-led outreach to fill your pipeline with qualified meetings.",
  openGraph: {
    title: "B2B Lead Generation Services for SaaS Teams | PravRaha",
    description:
      "Book a free strategy call with PravRaha. We combine proprietary B2B contact data, buyer intent signals, Account & Lead Intelligence and SDR-led outreach to fill your pipeline with qualified meetings.",
    images: [
      {
        url: "/serv.jpeg",
        width: 1200,
        height: 630,
        alt: "PravRaha - B2B Lead Generation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Lead Generation Services for SaaS Teams | PravRaha",
    description:
      "Book a free strategy call with PravRaha. We combine proprietary B2B contact data, buyer intent signals, Account & Lead Intelligence and SDR-led outreach to fill your pipeline with qualified meetings.",
    images: ["/serv.jpeg"],
  },
};

export default function B2BLeadGenerationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
