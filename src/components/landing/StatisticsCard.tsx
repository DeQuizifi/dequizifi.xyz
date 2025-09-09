import React from "react";
import type { LucideIcon } from "lucide-react";

interface Stat {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

const StatisticsCard: React.FC<{ stat: Stat }> = ({ stat }) => {
  const IconComponent = stat.icon;

  return (
    <div className="group relative p-8 rounded-2xl backdrop-blur-sm text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-background/80">
      {/* Icon */}
      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        <IconComponent className="w-8 h-8 text-primary" />
      </div>

      {/* Number */}
      <h3 className="text-3xl lg:text-4xl font-bold mb-3 text-primary">
        {stat.number}
      </h3>

      {/* Title */}
      <h4 className="text-lg font-semibold mb-2 text-foreground">
        {stat.title}
      </h4>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {stat.description}
      </p>
    </div>
  );
};

export default StatisticsCard;
