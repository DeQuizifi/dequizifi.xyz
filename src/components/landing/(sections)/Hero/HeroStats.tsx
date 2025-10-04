import { Card } from "@/components/ui/card";

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <Card className="relative flex flex-col items-center justify-center px-6 py-4 rounded-2xl backdrop-blur-sm bg-white/10 border border-border shadow-inner transition-transform duration-200 hover:scale-105 animate-float">
      <span className="block text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-violet-600 via-blue-800 to-purple-400 text-transparent bg-clip-text drop-shadow-lg mb-1 animate-gradientX">
        {value}
      </span>
      <span className="text-base md:text-lg font-medium text-black/80 dark:text-white/80 tracking-wide uppercase text-center">
        {label}
      </span>
      <div className="absolute inset-0 pointer-events-none rounded-2xl border border-white/10" />
    </Card>
  );
}

export default function HeroStats() {
  return (
    <div className="flex gap-6 md:gap-10 mb-8 w-full justify-center animate-fadeIn">
      <StatCard value="1000+" label="DeFi Questions" />
      <StatCard value="50K+" label="Tokens Earned" />
      <StatCard value="500+" label="Active Learners" />
    </div>
  );
}