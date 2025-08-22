import { HiOutlineBolt, HiOutlineStar } from "react-icons/hi2";

export default function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ background: "var(--background)" }}
    >
      <div
        className="flex items-center gap-1 space-between mb-6 mt-4 px-4 py-1 rounded-full text-xs border font-semibold shadow"
        style={{
          background: "var(--card)",
          color: "var(--primary)",
          borderColor: "var(--border)",
        }}
      >
        <span>
          <HiOutlineStar />
        </span>{" "}
        Farcaster Native DeFi Education
      </div>

      <h1
        className="text-7xl md:text-7xl font-extrabold text-center mb-2"
        style={{ color: "var(--primary-foreground)" }}
      >
        Learn Defi,
      </h1>

      <h2
        className="text-5xl md:text-5xl font-extrabold text-center mb-4"
        style={{ color: "var(--foreground)" }}
      >
        Earn Rewards
      </h2>

      <p
        className="text-xl text-center max-w-2xl mb-8 mt-5"
        style={{ color: "var(--color-hero-muted)" }}
      >
        Master DeFi through engaging quizzes, earn tokens, collect badges, and
        join the most elegant crypto education platform built for the Farcaster
        community.
      </p>

      <div className="flex w-full max-w-md gap-4 justify-center mb-12">
        <button className="font-semibold px-8 py-3 rounded-lg shadow transition bg-gradient-to-r from-[var(--color-hero-gradient-from)] to-[var(--color-hero-gradient-to)] text-background hover:opacity-90">
          Start Learning →
        </button>
        <button className="border shadow font-semibold px-8 py-3 rounded-lg transition flex items-center gap-2 bg-[var(--color-hero-button-bg)] text-[var(--primary-foreground)] border-[var(--border)] hover:bg-opacity-90">
          <span>
            <HiOutlineBolt />
          </span>{" "}
          Explore Quizzes
        </button>
      </div>

      <div className="flex gap-28 mb-8">
        <div className="text-center">
          <span
            className="block text-2xl font-bold"
            style={{ color: "var(--primary)" }}
          >
            1000+
          </span>
          <span
            className="text-sm"
            style={{ color: "var(--color-hero-muted)" }}
          >
            DeFi Questions
          </span>
        </div>
        <div className="text-center">
          <span
            className="block text-2xl font-bold"
            style={{ color: "var(--primary)" }}
          >
            50K+
          </span>
          <span
            className="text-sm"
            style={{ color: "var(--color-hero-muted)" }}
          >
            Tokens Earned
          </span>
        </div>
        <div className="text-center">
          <span
            className="block text-2xl font-bold"
            style={{ color: "var(--primary)" }}
          >
            500+
          </span>
          <span
            className="text-sm"
            style={{ color: "var(--color-hero-muted)" }}
          >
            Active Learners
          </span>
        </div>
      </div>
    </section>
  );
}
