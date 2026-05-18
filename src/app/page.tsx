import dynamic from "next/dynamic";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyWhatsApp } from "@/components/layout/MobileStickyWhatsApp";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";

const Process = dynamic(
  () => import("@/components/sections/Process").then((m) => m.Process),
  { ssr: true }
);
const Portfolio = dynamic(
  () => import("@/components/sections/Portfolio").then((m) => m.Portfolio),
  { ssr: true }
);
const Automation = dynamic(
  () => import("@/components/sections/Automation").then((m) => m.Automation),
  { ssr: true }
);
const Industries = dynamic(
  () => import("@/components/sections/Industries").then((m) => m.Industries),
  { ssr: true }
);
const MotionCreative = dynamic(
  () =>
    import("@/components/sections/MotionCreative").then((m) => m.MotionCreative),
  { ssr: true }
);
const WhySalesGhost = dynamic(
  () =>
    import("@/components/sections/WhySalesGhost").then((m) => m.WhySalesGhost),
  { ssr: true }
);
const CTA = dynamic(
  () => import("@/components/sections/CTA").then((m) => m.CTA),
  { ssr: true }
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-24 md:pb-0">
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <Automation />
        <Industries />
        <MotionCreative />
        <WhySalesGhost />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyWhatsApp />
    </>
  );
}
