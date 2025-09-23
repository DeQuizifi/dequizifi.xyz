import React, { type ReactNode, useId, memo } from "react";
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
interface QuizCardProps {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  /** Number or label for questions; defaults to "10+" */
  questionCount?: number | string;
  /** Estimated time string; defaults to "5–7 min" */
  estimatedTime?: string;
  /** Optional preview click handler, receives position */
  onPreview?: (
    position: { top: number; left: number },
    title: string,
    subtitle?: string
  ) => void;
}

function QuizCard({
  icon,
  title,
  subtitle,
  questionCount = "10+",
  estimatedTime = "5–7 min",
  onPreview,
}: QuizCardProps) {
  const id = useId();
  const titleId = `quizcard-${id}-title`;
  const descId = `quizcard-${id}-desc`;
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handlePreviewClick = () => {
    if (cardRef.current && onPreview) {
      const rect = cardRef.current.getBoundingClientRect();
      // Adjust for scroll position
      const top = rect.top + window.scrollY;
      const left = rect.left + window.scrollX;
      onPreview({ top, left }, title, subtitle);
    }
  };

  return (
    <Card
      ref={cardRef}
      className="shadow-sm hover:shadow-lg hover:border-primary transition-all duration-200 hover:scale-105"
      role="article"
      aria-labelledby={titleId}
      aria-describedby={subtitle ? descId : undefined}
    >
      <CardHeader className="px-5">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg">
            {icon}
          </span>
          <div className="leading-tight">
            <CardTitle id={titleId} className="text-base font-semibold">
              {title}
            </CardTitle>
            {subtitle ? (
              <CardDescription id={descId} className="text-xs">
                {subtitle}
              </CardDescription>
            ) : null}
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-5 pt-0">
        <Separator className="my-4 opacity-60" />
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Questions</span>
          <span className="font-semibold">{questionCount}</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Est. time</span>
          <span className="font-semibold">{estimatedTime}</span>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button
          type="button"
          variant="outline"
          className="w-full hover:bg-accent/50"
          aria-label={`Explore ${title} quiz`}
          onClick={handlePreviewClick}
        >
          Preview
        </Button>
      </CardFooter>
    </Card>
  );
}

export default memo(QuizCard);
