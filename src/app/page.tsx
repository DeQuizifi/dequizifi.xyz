import Hero from "@/components/landing/(sections)/Hero/Hero";
import Feature from "../components/landing/(sections)/Feature/Feature";
import CTA from "../components/landing/(sections)/CTA/CTA";
import About from "@/components/landing/(sections)/About/About";
import HowItWorks from "../components/landing/(sections)/HowItWorks/HowItWorks";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks/>
      <Feature />
      <CTA />
      <About />
    </main>
  );
}
