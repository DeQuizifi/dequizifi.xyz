import React from "react";

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface StatisticsCardProps {
  icon: IconComponent;
  number: string;
  title: string;
  description?: string;
  className?: string;
}

const StatisticsCard = React.memo(
  React.forwardRef<HTMLDivElement, StatisticsCardProps>(
    ({ icon: Icon, number, title, description, className = "" }, ref) => {
      return (
        <div
          ref={ref}
          className={`group relative p-8 rounded-2xl bg-background/60 backdrop-blur-sm text-center transition-transform duration-300 transform-gpu hover:-translate-y-1 hover:shadow-lg ${className}`}
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/20">
            <Icon className="w-8 h-8 text-primary" />
          </div>

          <h3 className="text-3xl lg:text-4xl font-extrabold mb-2 text-primary leading-none">
            {number}
          </h3>

          <h4 className="text-lg font-semibold text-foreground mb-2">{title}</h4>

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

export default StatisticsCard;