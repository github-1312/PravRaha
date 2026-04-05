import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About PravRaha | B2B GTM Intelligence Platform Story",
  description:
    "PravRaha is a full-stack B2B GTM intelligence platform founded in Ranchi, India. We combine proprietary contact data, buyer intent signals, and SDR-led outreach for global B2B teams.",
  openGraph: {
    title: "About PravRaha | B2B GTM Intelligence Platform Story",
    description:
      "PravRaha is a full-stack B2B GTM intelligence platform founded in Ranchi, India. We combine proprietary contact data, buyer intent signals, and SDR-led outreach for global B2B teams.",
    images: [
      {
        url: "/abo.jpeg",
        width: 1200,
        height: 630,
        alt: "PravRaha - B2B Lead Generation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About PravRaha | B2B GTM Intelligence Platform Story",
    description:
      "PravRaha is a full-stack B2B GTM intelligence platform founded in Ranchi, India. We combine proprietary contact data, buyer intent signals, and SDR-led outreach for global B2B teams.",
    images: ["/obo.jpeg"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
