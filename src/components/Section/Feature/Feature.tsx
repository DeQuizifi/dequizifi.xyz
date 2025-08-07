import CustomCard from "@/components/CustomCard/custom-card";
import Header from "@/components/Header/header";
import { Brain } from "lucide-react";
import { SiFuturelearn } from "react-icons/si";
import { FaConnectdevelop } from "react-icons/fa";
import Footer from "@/components/Footer/foooter";
import { GraduationCap } from "lucide-react";
import { Trophy } from "lucide-react";
import { Zap } from "lucide-react";
import { Users } from "lucide-react";
import { Star } from "lucide-react";

export default function Feature() {
  return (
    <div className="bg-sidebar-primary-foreground overflow-x-hidden min-h-screen">
      <div className="w-full flex justify-center mt-4">
        <span className="flex items-center px-1 py-0.5 gap-0.5 text-xs font-sans rounded-full bg-sidebar-primary-foreground text-foreground border border-chart-2 shadow-sm">
          <span className="text-primary">
            <Star className="w-5 h-5" />
          </span>
          Core Features
        </span>
      </div>
      <Header
        title="Studio-Grade Experience"
        subtitle="Every detail crafted for the modern crypto learner who values both substance and style."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 my-6 mx-8">
        <CustomCard
          IconComponent={Brain}
          buttonlabel="Learn"
          title="Deep Defi Learning"
          description="Master protocols, strategies, and concepts through interactive quizzes with real-time knowledge updates."
          features={[
            "Interactive quizzes",
            "Real-time knowledge updates",
            "Comprehensive protocol coverage",
          ]}
        />

        <CustomCard
          IconComponent={SiFuturelearn}
          buttonlabel="Earn"
          title="Multiple Earning Loops"
          description="Earn tokens for correct answers, trade achievements badges, and participate in revenue-sharing quizzes."
          features={["Token Rewards", "Badge Trading", "Revenue Share"]}
        />

        <CustomCard
          IconComponent={FaConnectdevelop}
          buttonlabel="Connect"
          title="Social Learning"
          description="Join leaderboards, collect badges, challenge friends, and learn together in the Farcaster community."
          features={["Leaderboards", "Multiplayer", "Community"]}
        />
      </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-20 my-8">
        <Footer
          title="Expert Content"
          subtitle="Curated by DeFi professionals"
          IconComponent={GraduationCap}
        />
        <Footer
          title="Achievement System"
          subtitle="Unlock badges and milestones"
          IconComponent={Trophy}
        />
        <Footer
          title="Real-time Rewards"
          subtitle="Instant token distribution"
          IconComponent={Zap}
        />
        <Footer
          title="Farcaster Native"
          subtitle="Built for crypto-social"
          IconComponent={Users}
        />
      </div>
    </div>
  );
}
