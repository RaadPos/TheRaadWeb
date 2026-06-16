import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Strip from "@/components/Strip";
import Ways from "@/components/Ways";
import HowItWorks from "@/components/HowItWorks";
import FeatureBand from "@/components/FeatureBand";
import InsideApp from "@/components/InsideApp";
import BusinessShowcase from "@/components/BusinessShowcase";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Effects from "@/components/Effects";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Strip />
      <Ways />
      <HowItWorks />
      <FeatureBand />
      <InsideApp />
      <BusinessShowcase />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
      <Effects />
    </main>
  );
}
