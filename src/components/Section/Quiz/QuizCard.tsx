import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function QuizCard({
  icon,
  title,
  subtitle,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <Card className="shadow-sm border hover:shadow-md transition-all">
      <CardHeader className="px-5">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--card)] border border-[var(--border)]">
            {icon}
          </span>
          <div className="leading-tight">
            <CardTitle className="text-base font-semibold">{title}</CardTitle>
            <CardDescription className="text-xs">{subtitle}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-5 pt-0">
        <Separator className="my-4 opacity-60" />
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Questions</span>
          <span className="font-semibold text-[var(--primary-foreground)]">
            10+
          </span>
        </div>
        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Est. time</span>
          <span className="font-semibold text-[var(--primary-foreground)]">
            5–7 min
          </span>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button
          variant="outline"
          className="w-full border-[var(--border)] hover:bg-accent/50"
          aria-label={`Explore ${title} quiz`}
        >
          Preview
        </Button>
      </CardFooter>
    </Card>
  );
}
