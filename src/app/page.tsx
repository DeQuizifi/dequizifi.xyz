import Hero from "@/components/Section/Hero/Hero";
import Feature from "../components/Section/Feature/Feature";
import CTA from "../components/Section/CTA/CTA";
import About from "@/components/Section/About/About";
import Quiz from "@/components/Section/Quiz/Quiz";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <CTA />
      <About />
      <Quiz />
    </main>
  );
}
