import SectionBadge from "@/components/common/SectionBadge";
import { HiOutlineStar } from "react-icons/hi2";

export default function HeroTitle() {
  return (
    <>
      <SectionBadge text="Farcaster Native DeFi Education" iconLeft={<HiOutlineStar />} />
      <h1 className="text-7xl md:text-7xl font-extrabold text-center mb-2 bg-gradient-to-r from-[var(--color-hero-gradient-from)] to-[var(--color-hero-gradient-to)] text-transparent bg-clip-text animate-gradientX">
        Learn DeFi,
      </h1>
      <h2 className="text-5xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-purple-400 to-violet-600 text-transparent bg-clip-text animate-gradientX">
        Earn Rewards
      </h2>
      <p className="text-xl text-center max-w-2xl mb-8 mt-5 animate-fadeIn">
        Master DeFi through engaging quizzes, earn tokens, collect badges, and join the most elegant crypto education platform built for the Farcaster community.
      </p>
    </>
  );
}