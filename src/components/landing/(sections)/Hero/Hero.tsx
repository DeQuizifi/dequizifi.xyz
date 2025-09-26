
import HeroBackground from "./HeroBackground";
import HeroTitle from "./HeroTitle";
import HeroActions from "./HeroActions";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-screen h-screen overflow-hidden px-0">
      <HeroBackground />
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center px-4 mx-auto">
        <HeroTitle />
        <HeroActions />
        <HeroStats />
      </div>
    </section>
  );
}
