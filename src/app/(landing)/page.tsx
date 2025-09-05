import Hero from "@/app/(landing)/Hero/Hero";
import Feature from "./Feature/Feature";
import CTA from "./CTA/CTA";
import About from "@/app/(landing)/About/About";
import Quiz from "@/app/(landing)/Quiz/Quiz";
import HowItWorks from "./HowItWorks/HowItWorks";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks/>
      <Feature />
      <CTA />
      <About />
      <Quiz />
    </main>
  );
}
