import { cn } from "@/lib/utils";

type FooterProps = {
  title: string;
  subtitle?: string;
  IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
};

export default function Footer({
  title,
  subtitle,
  IconComponent,
  className,
}: FooterProps) {
  return (
    <footer
      className={cn(
        "group relative flex flex-col items-center justify-center gap-4 text-center",
        "py-8 transition-all duration-300 ease-out",
        className
      )}
    >
      {/* Icon container with enhanced floating effects */}
      <div className="relative">
        {/* Pulsing background rings */}
        <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 ease-out" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/15 to-chart-2/15 rounded-full scale-0 group-hover:scale-125 transition-transform duration-500 delay-100" />

        {/* Main icon background */}
        <div className="relative p-4 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 group-hover:from-primary/35 group-hover:via-primary/25 group-hover:to-primary/20 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/25">
          <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-primary transition-all duration-300" />
        </div>

        {/* Floating particles effect */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" />
        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-chart-1/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500 delay-200" />
      </div>

      {/* Title with floating animation */}
      <div className="relative">
        <h3 className="font-bold text-xl md:text-2xl bg-gradient-to-r from-foreground via-foreground to-foreground/90 bg-clip-text text-transparent group-hover:from-primary group-hover:via-primary group-hover:to-primary/90 transition-all duration-300 leading-tight">
          {title}
        </h3>
        {/* Animated underline */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary via-chart-2 to-primary group-hover:w-full transition-all duration-500 ease-out" />
      </div>

      {/* Subtitle with subtle floating effect */}
      {subtitle && (
        <p className="text-base md:text-lg text-muted-foreground/70 group-hover:text-muted-foreground/90 transition-colors duration-300 leading-relaxed max-w-[240px] md:max-w-[280px]">
          {subtitle}
        </p>
      )}

      {/* Subtle ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-3xl scale-150" />
    </footer>
  );
}