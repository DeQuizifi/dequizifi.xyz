import React from "react";
import { Card } from "@/components/ui/card";

export type HowItWorksCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  color?: string;
  delay?: string;
  index: number;
};


const HowItWorksCard: React.FC<HowItWorksCardProps> = ({
  icon: Icon,
  title,
  description,
  color = "from-gray-400 to-gray-500",
  delay = "0ms",
  index,
}) => {
  return (
    <Card
      style={{ animationDelay: delay }}
      className="relative flex flex-col items-center justify-between p-8 text-center group border-0 bg-white/10 backdrop-blur-xl shadow-[0_4px_32px_0_rgba(0,0,0,0.10)] rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_8px_40px_0_rgba(0,0,0,0.18)]"
      role="group"
      aria-labelledby={`howitworks-step-${index}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/40 group-hover:shadow-[0_0_32px_4px_var(--tw-shadow-color)] group-hover:shadow-primary/20 transition-all duration-500 z-10" aria-hidden />
      <span
        className="absolute top-5 left-5 w-9 h-9 rounded-xl bg-gradient-to-br from-primary/80 to-accent/80 text-white flex items-center justify-center text-base font-bold tracking-widest shadow-lg border border-white/10 backdrop-blur-md"
        aria-hidden
      >
        {index + 1}
      </span>

      {/* Icon with glassy, glowing effect */}
      <div
        className={`relative w-16 h-16 flex items-center justify-center mb-7 rounded-2xl bg-gradient-to-br ${color} shadow-[0_2px_24px_0_rgba(0,0,0,0.10)] before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:bg-white/10 before:blur-md before:opacity-60`}
        style={{ zIndex: 1 }}
      >
        <Icon className="w-8 h-8 text-white relative z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)]" aria-hidden />
      </div>

      {/* Content */}
      <h3
        id={`howitworks-step-${index}`}
        className="text-lg font-semibold mb-3 tracking-tight text-black/90 group-hover:text-primary transition-colors duration-300"
      >
        {title}
      </h3>
      <p className="text-sm text-black/70 leading-relaxed max-w-xs mx-auto">
        {description}
      </p>

      {/* Subtle bottom glow */}
      <div className="absolute left-1/2 -bottom-8 -translate-x-1/2 w-40 h-16 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 blur-2xl opacity-60 pointer-events-none" aria-hidden />
    </Card>
  );
};

export default HowItWorksCard;
