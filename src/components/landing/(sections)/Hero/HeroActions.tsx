import { HiOutlineBolt } from "react-icons/hi2";
import { Button } from "@/components/ui/button";

export default function HeroActions() {
  return (
    <div className="flex flex-col sm:flex-row mx-auto max-w-md gap-3 sm:gap-6 justify-center mb-12 px-2 w-full">
      <Button className="hover:scale-105 duration-300">
        <span className="whitespace-nowrap">Start Learning →</span>
      </Button>
      <Button className="hover:scale-105 duration-300"
        variant="outline">
        <span>
          <HiOutlineBolt />
        </span>
        <span className="whitespace-nowrap">Explore Quizzes</span>
      </Button>
    </div>
  );
}