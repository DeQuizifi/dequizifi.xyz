import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Brain } from "lucide-react";
import { BookOpen } from "lucide-react";

type CustomCardProps = {
  title: string;
  description: string;
  features?: string[];
  IconComponent?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export default function CustomCardTwo({
  title,
  description,
  features = [],
  IconComponent = Brain,
}: CustomCardProps) {
  return (
    <div className="flex items-center justify-center bg-gray-50 rounded-md h-screen">
      <Card
        className="
                group
                flex flex-col items-center justify-center
                w-full max-w-[300px]
                h-full max-h-96
                transition
                bg-white
                border border-gray-200
                text-gray-900
                hover:bg-violet-50
                hover:border-violet-50
                cursor-pointer
                shadow
                font-sans
            "
      >
        <CardHeader className="flex flex-col items-start gap-2 pt-1 pb-1 w-full">
          <div className="rounded-sm p-2 w-fit border-2 border-violet-600">
            <div className="w-8 h-8 rounded-sm bg-white flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-violet-600" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-4 pb-2 group-hover:text-violet-700 transition-colors">
          <CardTitle className="text-2xl font-bold mb-1 group-hover:text-violet-700 transition-colors font-sans">
            {title}
          </CardTitle>

          <p className="text-sm text-violet-700 mb-2 font-sans">
            Newcomers seeking elegant learning
          </p>

          <CardDescription className="text-sm mb-3 text-gray-500">
            {description}
          </CardDescription>
          <ul className="list-none space-y-3 pl-0 text-xs">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-500 inline-block" />
                <div className="text-gray-500">{feature}</div>
              </li>
            ))}
          </ul>
        </CardContent>
        <button
  className="py-2 ml-6 mr-6 px-10 rounded-md border-2 border-gray-100 hover:border-gray-300 font-sans font-semibold transition"
  type="button"
>
  Start your journey
</button>
      </Card>
    </div>
  );
}
