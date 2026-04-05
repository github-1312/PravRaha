import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup to your Sales Operating System",
  description:
    "Create your PravRaha account and start filling your B2B pipeline with precision. ICP targeting, intent-based prospecting, and SDR-led outreach in one platform.",
  openGraph: {
    title: "Signup to your Sales Operating System",
    description:
      "Create your PravRaha account and start filling your B2B pipeline with precision. ICP targeting, intent-based prospecting, and SDR-led outreach in one platform.",
    images: [
      {
        url: "/si.jpeg",
        width: 1200,
        height: 630,
        alt: "PravRaha - B2B Lead Generation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Signup to your Sales Operating System",
    description:
      "Create your PravRaha account and start filling your B2B pipeline with precision. ICP targeting, intent-based prospecting, and SDR-led outreach in one platform.",
    images: ["/si.jpeg"],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
