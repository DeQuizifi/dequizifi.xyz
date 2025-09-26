import { HiOutlineBolt } from "react-icons/hi2";
import { Button } from "@/components/ui/button";

export default function HeroActions() {
  return (
    <div className="flex flex-col sm:flex-row mx-auto max-w-md gap-3 sm:gap-6 justify-center mb-12 px-2 w-full">
      <Button
        className="font-semibold w-full sm:w-auto px-6 sm:px-10 py-2 sm:py-4 rounded-xl shadow-lg transition-transform duration-200 bg-gradient-to-r from-[var(--color-hero-gradient-from)] to-[var(--color-hero-gradient-to)] text-background hover:scale-105 hover:shadow-xl hover:opacity-90 text-base sm:text-xl flex justify-center text-center animate-pop"
      >
        <span className="whitespace-nowrap">Start Learning →</span>
      </Button>
      <Button
        variant="outline"
        className="border shadow-lg font-semibold w-full sm:w-auto px-6 sm:px-10 py-2 sm:py-4 rounded-xl transition-transform duration-200 flex items-center justify-center gap-2 bg-[var(--color-hero-button-bg)] text-[var(--primary-foreground)] border-[var(--border)] hover:scale-105 hover:shadow-xl hover:bg-opacity-90 text-base sm:text-xl text-center animate-pop"
      >
        <span>
          <HiOutlineBolt />
        </span>
        <span className="whitespace-nowrap">Explore Quizzes</span>
      </Button>
    </div>
  );
}