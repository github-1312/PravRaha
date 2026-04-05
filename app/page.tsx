import type { Metadata } from "next";
import Hero from "./components/Hero";

export const metadata: Metadata = {
  title: "PravRaha - B2B Lead Generation & GTM Intelligence Platform",
  description:
    "PravRaha combines proprietary B2B contact data, buyer intent signals, and SDR-led outbound prospecting to accelerate your pipeline and book qualified meetings.",
  openGraph: {
    title: "PravRaha - B2B Lead Generation & GTM Intelligence Platform",
    description:
      "PravRaha combines proprietary B2B contact data, buyer intent signals, and SDR-led outbound prospecting to accelerate your pipeline and book qualified meetings.",
    images: [
      {
        url: "/ho.jpeg",
        width: 1200,
        height: 630,
        alt: "PravRaha - B2B Lead Generation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PravRaha - B2B Lead Generation & GTM Intelligence Platform",
    description:
      "PravRaha combines proprietary B2B contact data, buyer intent signals, and SDR-led outbound prospecting to accelerate your pipeline and book qualified meetings.",
    images: ["/ho.jpeg"],
  },
};
// import Services from "./components/Services";
import ProductsSection from "./components/ProductsSection";
import ContactSection from "./components/ContactSection";
import LogoMarquee from "./components/LogoMarquee";
import CtaMain from "./components/CtaMain";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Services /> */}
      <ProductsSection />
      <LogoMarquee />
      <ContactSection />
      <CtaMain />
    </>
  );
}
