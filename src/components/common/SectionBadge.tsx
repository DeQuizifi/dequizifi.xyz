import React from "react";

type SectionBadgeProps = {
  text: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
};

export default function SectionBadge({
  text,
  iconLeft,
  iconRight,
  className = "",
}: SectionBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 my-4 rounded-full border text-sm font-medium ${className}`}
    >
      {iconLeft && <span className="flex-shrink-0">{iconLeft}</span>}
      <span>{text}</span>
      {iconRight && <span className="flex-shrink-0">{iconRight}</span>}
    </span>
  );
}
