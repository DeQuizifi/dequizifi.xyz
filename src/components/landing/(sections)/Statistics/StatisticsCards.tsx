import React from "react";

import { stats, StatTitle } from "@/lib/data";

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface StatisticsCardProps {
  icon: IconComponent;
  number: string;
  title: string;
  description?: string;
  className?: string;
}

export const StatisticsCard = React.memo(
  React.forwardRef<HTMLDivElement, StatisticsCardProps>(
    ({ icon: Icon, number, title, description, className = "" }, ref) => {
      return (
        <div
          ref={ref}
          className={`group relative p-8 rounded-2xl backdrop-blur-sm text-center transition-all duration-300 hover:shadow-lg hover:bg-background/80 ${className}`}
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/20">
            <Icon className="w-8 h-8 text-primary" />
          </div>

          <h3 className="text-3xl lg:text-4xl font-extrabold mb-2 text-primary leading-none">
            {number}
          </h3>

          <h4 className="text-lg font-semibold text-foreground mb-2">
            {title}
          </h4>

          {description && (
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>
      );
    }
  )
);

StatisticsCard.displayName = "StatisticsCard";

// stats imported from src/lib/data

export default function StatisticsCards({
  icons,
}: {
  icons: Record<StatTitle, IconComponent>;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
      {stats.map((s, i) => {
        const Icon = icons[s.title];
        return (
          <StatisticsCard
            key={s.title + i}
            icon={Icon}
            number={s.number}
            title={s.title}
            description={s.description}
          />
        );
      })}
    </div>
  );
}
