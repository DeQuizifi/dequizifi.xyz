import Header from "@/components/common/header";
import { Sparkles } from "lucide-react";

export default function ReadyToStartTitle() {
  return (
    <div className="mb-8 md:mb-12 lg:mb-16">
      <Header
        prelude={
          <span className="flex items-center px-3 py-1.5 gap-1.5 text-sm font-medium rounded-full bg-sidebar-primary-foreground text-foreground border border-chart-2 shadow-sm hover:shadow-md transition-shadow duration-200">
            <span className="text-primary">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5" aria-hidden />
            </span>
            <span className="sr-only">Ready to start</span>
            <span aria-hidden>Ready to start your DeFi journey?</span>
          </span>
        }
        title="Join thousands of DeFi learners today"
        subtitle="Start your journey into decentralized finance with interactive quizzes, earn rewards, and become part of the most engaged crypto education community on Farcaster."
      />
    </div>
  );
}
