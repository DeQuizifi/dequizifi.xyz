"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as LucideIcons from "lucide-react";


type CustomCardProps = {
  title: string;
  subtitle?: string;
  description: string;
  features?: string[];
  buttonlabel: string;
  icon?: keyof typeof LucideIcons;
};

export default function CustomCard({
  title,
  subtitle,
  description,
  features = [],
  buttonlabel,
  icon = "Brain",
}: CustomCardProps) {
  const IconComponent = LucideIcons[icon] as React.ComponentType<React.SVGProps<SVGSVGElement>>;

  return (
    <div
      style={{
        backgroundColor: "var(--color-customcard-bg)",
        borderColor: "var(--color-customcard-border)",
      }}
      className="rounded-lg border transition-colors hover:border-[var(--color-customcard-border-hover)]"
    >
      <Card
        style={{
          backgroundColor: "var(--color-customcard-bg)",
          color: "var(--color-customcard-text)",
        }}
        className="group flex h-full w-full max-w-[320px] cursor-pointer flex-col border-0 bg-transparent p-6 font-sans shadow-none transition hover:bg-[var(--color-customcard-hover-bg)]"
      >
        <CardHeader className="flex w-full flex-col items-start gap-3 px-0 pt-0 pb-4">
          <div
            className="w-fit rounded-lg p-3"
            style={{
              background:
                "linear-gradient(to bottom right, var(--color-customcard-gradient-from), var(--color-customcard-gradient-to))",
            }}
          >
            <IconComponent
              className="h-6 w-6"
              style={{ color: "var(--color-customcard-icon)" }}
            />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            {subtitle && (
              <p
                className="text-sm font-medium"
                style={{ color: "var(--color-customcard-subtitle)" }}
              >
                {subtitle}
              </p>
            )}
          </div>
        </CardHeader>
        <CardContent className="flex-1 px-0 pb-6">
          <CardDescription
            className="mb-4 text-sm leading-relaxed"
            style={{ color: "var(--color-customcard-description)" }}
          >
            {description}
          </CardDescription>
          <ul className="list-none space-y-2 pl-0 text-sm">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span
                  className="inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                  style={{
                    backgroundColor: "var(--color-customcard-feature-dot)",
                  }}
                />
                <span style={{ color: "var(--color-customcard-description)" }}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="px-0 pt-0">
          <button
            style={{
              backgroundColor: "var(--color-customcard-button-bg)",
              color: "var(--color-customcard-button-text)",
              borderColor: "var(--color-customcard-button-border)",
            }}
            className="w-full rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:bg-[var(--color-customcard-button-hover-bg)]"
          >
            {buttonlabel}
          </button>
        </CardFooter>
      </Card>
    </div>
  );
}
