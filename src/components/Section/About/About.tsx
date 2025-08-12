import CustomCard from "@/components/CustomCard/custom-card";
import { BookOpen, TrendingUp, Heart } from "lucide-react";

export default function About() {
  return (
    <section className="w-full bg-[hsl(263_100%_95%)] flex flex-col items-center py-20 px-4">
      <div className="mb-4 flex items-center">
        <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
          ⚡ Perfect For
        </span>
      </div>
      <h2 className="text-[42px] leading-tight md:text-5xl font-extrabold text-center bg-gradient-to-r from-violet-600 to-violet-400 bg-clip-text text-transparent mb-4">
        Who Is DeQuizify For?
      </h2>
      <p className="text-gray-500 text-center mb-14 max-w-3xl text-sm md:text-base leading-relaxed">
        Built for the modern crypto community that values both learning depth
        and design excellence.
      </p>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 justify-center items-start max-w-6xl">
        <CustomCard
          title="Crypto Curious"
          subtitle="Newcomers seeking elegant learning"
          description="Perfect for those who want to understand DeFi without overwhelming complexity. Our beautiful interface makes learning enjoyable."
          features={[
            "Beginner-friendly content",
            "Visual learning approach",
            "Confidence building",
          ]}
          buttonlabel="Start Your Journey"
          IconComponent={BookOpen}
        />
        <CustomCard
          title="DeFi Practitioners"
          subtitle="Validation through premium experience"
          description="Advanced users who appreciate quality design while testing and expanding their protocol knowledge."
          features={[
            "Advanced strategies",
            "Expert validation",
            "Professional network",
          ]}
          buttonlabel="Start Your Journey"
          IconComponent={TrendingUp}
        />
        <CustomCard
          title="Farcaster Power Users"
          subtitle="Design quality meets social features"
          description="Active community members who value both aesthetic excellence and meaningful social learning experiences."
          features={[
            "Social challenges",
            "Community rewards",
            "Native integration",
          ]}
          buttonlabel="Start Your Journey"
          IconComponent={Heart}
        />
      </div>
    </section>
  );
}
