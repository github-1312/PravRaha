import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login to your Sales Operating System",
  description:
    "Sign in to your PravRaha account to manage your B2B prospecting campaigns, track outreach sequences, and monitor pipeline intelligence in real time.",
  openGraph: {
    title: "Login to your Sales Operating System",
    description:
      "Sign in to your PravRaha account to manage your B2B prospecting campaigns, track outreach sequences, and monitor pipeline intelligence in real time.",
    images: [
      {
        url: "/lo.jpeg",
        width: 1200,
        height: 630,
        alt: "PravRaha - B2B Lead Generation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Login to your Sales Operating System",
    description:
      "Sign in to your PravRaha account to manage your B2B prospecting campaigns, track outreach sequences, and monitor pipeline intelligence in real time.",
    images: ["/lo.jpeg"],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
