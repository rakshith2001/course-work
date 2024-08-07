import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import Bonus from "@/components/Bonus";
import FeaturesTab from "@/components/FeaturesTab";

import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import Brands from "@/components/Brands";



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
      <Testimonial />
      <Bonus />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}
