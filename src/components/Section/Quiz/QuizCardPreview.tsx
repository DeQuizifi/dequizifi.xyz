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
}

// QuizCardPreview modal component
// Shows quiz title, subtitle, and sample questions. Tap anywhere outside the card or the close button to close.
const QuizCardPreview: React.FC<QuizCardPreviewProps> = ({
  title,
  subtitle,
  onClose,
  questions = sampleQuestions,
}) => {
  return (
    // Overlay: closes modal when clicked
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--popover-foreground)]/40"
      onClick={onClose}
      aria-label="Close preview overlay"
    >
      <Card
        className="relative min-w-[300px] max-w-xs text-center shadow-lg bg-[var(--sidebar)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-2 right-2 font-bold text-[var(--muted-foreground)] hover:text-[var(--foreground)] text-xl"
          onClick={onClose}
          aria-label="Close preview"
        >
          x
        </button>
        <CardHeader>
          <CardTitle className="text-[var(--primary)] mb-2">{title}</CardTitle>
          {subtitle && (
            <CardDescription className="mb-2">{subtitle}</CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <p className="text-xs text-[var(--muted-foreground)] mb-2">
            This is a quick preview of the quiz topic.
          </p>
          {/* Sample questions */}
          {questions.length > 0 && (
            <div className="mt-4 text-left">
              <div className="text-sm font-semibold mb-2 text-[var(--primary)]">
                Sample Questions:
              </div>
              <ul className="list-disc pl-5 space-y-1">
                {questions.map((q, i) => (
                  <li
                    key={i}
                    className="text-xs text-[var(--muted-foreground)] font-bold"
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
