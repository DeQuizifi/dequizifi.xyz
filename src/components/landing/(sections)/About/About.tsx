import CustomCard from "@/components/common/CustomCard";
import type { CustomCardProps } from "@/components/common/CustomCard";
import { aboutCards } from "./aboutCards";

export default function About() {
  return (
    <section className="w-full bg-background flex flex-col items-center py-20 px-4">
      <div className="mb-4 flex items-center">
        <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
          <span aria-label="Perfect For" role="text">
            ⚡ Perfect For
          </span>
        </span>
      </div>
      <h2
        className="text-[42px] leading-tight md:text-5xl font-extrabold text-center mb-4"
        aria-label="Who Is DeQuizify For?"
      >
        Who Is DeQuizify For?
      </h2>
      <p className="text-center mb-14 max-w-3xl text-sm md:text-base leading-relaxed">
        Built for the modern crypto community that values both learning depth
        and design excellence.
      </p>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 justify-center items-start max-w-6xl">
        {aboutCards.map(
          ({ title, subtitle, description, features, buttonLabel, icon }) => (
            <CustomCard
              key={title}
              title={title}
              subtitle={subtitle}
              description={description}
              features={features}
              buttonlabel={buttonLabel}
              icon={icon as CustomCardProps["icon"]}
            />
          )
        )}
      </div>
    </section>
  );
}
