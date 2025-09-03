import { HiOutlineBolt, HiOutlineStar } from "react-icons/hi2";
import SectionBadge from "@/components/common/SectionBadge";

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <span
        className="block text-2xl font-bold"
      >
        {value}
      </span>
      <span className="text-sm">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen mx-auto max-w-2xl px-4"
    >

      <SectionBadge text="Farcaster Native DeFi Education" iconLeft={<HiOutlineStar />}/>

      <h1
        className="text-7xl md:text-7xl font-extrabold text-center mb-2"
      >
        Learn DeFi,
      </h1>

      <h2
        className="text-5xl md:text-5xl font-extrabold text-center mb-4"
      >
        Earn Rewards
      </h2>

      <p
        className="text-xl text-center max-w-2xl mb-8 mt-5"
      >
        Master DeFi through engaging quizzes, earn tokens, collect badges, and
        join the most elegant crypto education platform built for the Farcaster
        community.
      </p>

      <div className="flex flex-col sm:flex-row mx-auto max-w-md gap-3 sm:gap-6 justify-center mb-12 px-2 w-full">
        <button className="font-semibold w-full sm:w-auto px-6 sm:px-10 py-2 sm:py-4 rounded-xl shadow-lg transition-transform duration-200 bg-gradient-to-r from-[var(--color-hero-gradient-from)] to-[var(--color-hero-gradient-to)] text-background hover:scale-105 hover:shadow-xl hover:opacity-90 text-base sm:text-xl flex justify-center text-center">
          <span className="whitespace-nowrap">Start Learning →</span>
        </button>
        <button className="border shadow-lg font-semibold w-full sm:w-auto px-6 sm:px-10 py-2 sm:py-4 rounded-xl transition-transform duration-200 flex items-center justify-center gap-2 bg-[var(--color-hero-button-bg)] text-[var(--primary-foreground)] border-[var(--border)] hover:scale-105 hover:shadow-xl hover:bg-opacity-90 text-base sm:text-xl text-center">
          <span>
            <HiOutlineBolt />
          </span>
          <span className="whitespace-nowrap">Explore Quizzes</span>
        </button>
      </div>

      <div className="flex gap-20 md:gap-28 mb-8 ">
        <HeroStat value="1000+" label="DeFi Questions" />
        <HeroStat value="50K+" label="Tokens Earned" />
        <HeroStat value="500+" label="Active Learners" />
      </div>
    </section>
  );
}
