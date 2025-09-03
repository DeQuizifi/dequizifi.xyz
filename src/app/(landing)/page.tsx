import Hero from "@/app/(landing)/Hero/Hero";
import Feature from "./Feature/Feature";
import CTA from "./CTA/CTA";
import About from "@/app/(landing)/About/About";
import Quiz from "@/app/(landing)/Quiz/Quiz";

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
