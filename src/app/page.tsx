import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyWhatsApp } from "@/components/layout/MobileStickyWhatsApp";
import { Navbar } from "@/components/layout/Navbar";
import { Automation } from "@/components/sections/Automation";
import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { MotionCreative } from "@/components/sections/MotionCreative";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { WhySalesGhost } from "@/components/sections/WhySalesGhost";

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
