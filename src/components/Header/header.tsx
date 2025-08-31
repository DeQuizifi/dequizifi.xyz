import type { ReactNode } from "react";

type HeaderProps = {
  title: string;
  subtitle?: string;
  prelude?: ReactNode;
};

export default function Header({ title, subtitle, prelude }: HeaderProps) {
  return (
    <header
      className="p-4"
      aria-label="Page Header"
    >
      {prelude && (
        <div className="w-full flex justify-center mb-6 md:mb-8">{prelude}</div>
      )}
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-ring to-popover bg-clip-text text-transparent mb-1">
        {title}
      </h1>
      {subtitle && (
        <h2
          className="text-xl text-center text-chart-5"
          aria-label="Page Subtitle"
        >
          {subtitle}
        </h2>
      )}
    </header>
  );
}