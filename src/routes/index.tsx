import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import {
  Mission,
  ChapterIndex,
  WhenToStart,
  Services,
  Testimonials,
  Attestations,
  Methodology,
  Facts,
  Faq,
  Cta,
  Footer,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CyberCrest | Expert-Led Cybersecurity Compliance Services" },
      {
        name: "description",
        content:
          "CyberCrest is your assessment and advisory partner for SOC 2, ISO 27001, CMMC, PCI DSS and more — certifications, remediation and ongoing compliance.",
      },
      { property: "og:title", content: "CyberCrest | Cybersecurity Compliance Services" },
      {
        property: "og:description",
        content:
          "Achieve certifications and reduce risk with expert-led cybersecurity compliance assessments, remediation and maintenance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Nav />
      <Hero />
      <Marquee />
      <Mission />
      <ChapterIndex />
      <WhenToStart />
      <Services />
      <Testimonials />
      <Attestations />
      <Methodology />
      <Facts />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}
