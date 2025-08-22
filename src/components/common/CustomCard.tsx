import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as LucideIcons from "lucide-react";
import { Button } from "../ui/button";

export type CustomCardProps = {
  title: string;
  subtitle?: string;
  description: string;
  features?: string[];
  buttonlabel: string;
  icon?: keyof typeof LucideIcons;
};

export default function CustomCard({
  title,
  subtitle,
  description,
  features = [],
  buttonlabel,
  icon = "Brain",
}: CustomCardProps) {
  const IconComponent = LucideIcons[icon] as React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;
  return (
    <Card className="flex h-full w-full max-w-[350px] flex-col hover:scale-105 duration-500 p-6 shadow-none bg-gray-50">
      <CardHeader className="flex w-full flex-col items-start gap-3 px-0 pt-0 pb-4">
        <div className="w-fit rounded-lg p-3 bg-primary">
          <IconComponent className="h-6 w-6 text-white" />
        </div>
        <div className="space-y-2">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          {subtitle && (
            <p className="text-sm font-medium text-primary">{subtitle}</p>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1 px-0 pb-6">
        <CardDescription className="mb-4 text-sm leading-relaxed">
          {description}
        </CardDescription>
        <ul className="list-none space-y-2 pl-0 text-sm">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span className="font-bold">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button className="text-primary w-full bg-gray-50 shadow-none border border-primary/50 hover:border-primary hover:bg-primary/10 cursor-pointer">
          {buttonlabel}
        </Button>
      </CardFooter>
    </Card>
  );
}
