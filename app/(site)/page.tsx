import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import Bonus from "@/components/Bonus";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Hello World",
  description: "This is description",
  // other metadata
};

export default function Home() {
  return (
    <main>
      
      <Hero />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Testimonial />
      <Bonus />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}
