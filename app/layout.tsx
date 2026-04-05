import "./globals.css";
import Navbar from "./components/Navbar";
import FooterWrapper from "./components/FooterWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PravRaha | B2B Lead Generation Platform & SDR-Led Outreach",
  description:
    "PravRaha combines proprietary B2B contact data, real-time buyer intent signals, and SDR-led outreach, so growth-stage SaaS teams get qualified meetings, not just contact lists.",
  icons: {
    icon: "/loo.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">
          {children}
        </main>

        <FooterWrapper />
      </body>
    </html>
  );
}