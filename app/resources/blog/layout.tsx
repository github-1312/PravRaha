import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B Lead Generation & GTM Strategy Blog | PravRaha",
  description:
    "Outbound GTM playbooks, B2B prospecting frameworks, SDR strategies, and sales intelligence insights - from the team building PravRaha. Updated for 2026.",
  openGraph: {
    title: "B2B Lead Generation & GTM Strategy Blog | PravRaha",
    description:
      "Outbound GTM playbooks, B2B prospecting frameworks, SDR strategies, and sales intelligence insights - from the team building PravRaha. Updated for 2026.",
    images: [
      {
        url: "/blo.jpeg",
        width: 1200,
        height: 630,
        alt: "PravRaha - B2B Lead Generation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Lead Generation & GTM Strategy Blog | PravRaha",
    description:
      "Outbound GTM playbooks, B2B prospecting frameworks, SDR strategies, and sales intelligence insights - from the team building PravRaha. Updated for 2026.",
    images: ["/blo.jpeg"],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
