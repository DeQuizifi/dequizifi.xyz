// Sample questions for demonstration in the preview modal
const sampleQuestions = [
  "What is an AMM in DeFi?",
  "How do NFT royalties work?",
  "What is the purpose of a blockchain bridge?",
  "How can you secure your crypto wallet?",
  "What is a rollup in Layer 2 scaling?",
];
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

// Props for QuizCardPreview modal
interface QuizCardPreviewProps {
  title: string;
  subtitle?: string;
  onClose: () => void;
  questions?: string[];
  position?: { top: number; left: number };
}

// QuizCardPreview modal component
// Shows quiz title, subtitle, and sample questions. Tap anywhere outside the card or the close button to close.
const QuizCardPreview: React.FC<QuizCardPreviewProps> = ({
  title,
  subtitle,
  onClose,
  questions = sampleQuestions,
  position,
}) => {
  // Accessibility: unique title id for aria-labelledby
  const titleId = React.useId();
  // Accessibility & UX: Esc-to-close and background scroll lock
  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    let prev: string | undefined;
    // Only lock scroll for centered modal
    if (!position) {
      prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      if (!position && prev !== undefined) {
        document.body.style.overflow = prev;
      }
    };
  }, [onClose, position]);
  // If position is provided, render absolutely at that position
  const style = position
    ? {
        position: "absolute" as const,
        top: position.top,
        left: position.left,
        zIndex: 1000,
      }
    : undefined;

  if (position) {
    // Render overlay and absolutely positioned card
    return (
      <>
        {/* Full-screen overlay for outside click */}
        <div
          className="fixed inset-0 z-40 bg-black/10"
          onClick={onClose}
          aria-hidden="true"
        />
        <div style={style} className="">
          <Card
            className="relative min-w-[300px] max-w-xs text-center shadow-lg z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-2 right-2 font-bold text-xl"
              onClick={onClose}
              aria-label="Close preview"
            >
              x
            </button>
            <CardHeader>
              <CardTitle id={titleId} className="text-primary mb-2">
                {title}
              </CardTitle>
              {subtitle && (
                <CardDescription className="mb-2">{subtitle}</CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mb-2">
                This is a quick preview of the quiz topic.
              </p>
              {/* Sample questions */}
              {questions.length > 0 && (
                <div className="mt-4 text-left">
                  <div className="text-sm font-semibold mb-2 text-primary">
                    Sample Questions:
                  </div>
                  <ul className="list-disc pl-5 space-y-1">
                    {questions.map((q, i) => (
                      <li
                        key={i}
                        className="text-xs text-muted-foreground font-bold"
                      >
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </>
    );
  }
  // Fallback: centered modal
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
      aria-hidden="true"
    >
      <Card
        className="relative min-w-[300px] max-w-xs text-center shadow-lg"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-2 right-2 font-bold text-xl"
          onClick={onClose}
          aria-label="Close preview"
        >
          x
        </button>
        <CardHeader>
          <CardTitle id={titleId} className="text-primary mb-2">
            {title}
          </CardTitle>
          {subtitle && (
            <CardDescription className="mb-2">{subtitle}</CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground mb-2">
            This is a quick preview of the quiz topic.
          </p>
          {/* Sample questions */}
          {questions.length > 0 && (
            <div className="mt-4 text-left">
              <div className="text-sm font-semibold mb-2 text-primary">
                Sample Questions:
              </div>
              <ul className="list-disc pl-5 space-y-1">
                {questions.map((q, i) => (
                  <li
                    key={i}
                    className="text-xs text-muted-foreground font-bold"
                  >
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizCardPreview;
