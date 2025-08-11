import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Brain } from "lucide-react"

type CustomCardProps = {
  title: string;
  subtitle?: string;
  description: string;
  features?: string[];
  buttonlabel: string;
  IconComponent?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function CustomCard({title, subtitle, description, features=[], buttonlabel, IconComponent = Brain}: CustomCardProps) {
    return (
        <div className="bg-white rounded-lg border border-gray-200 hover:border-violet-200 transition-colors">
        <Card
            className="
                group
                flex flex-col
                w-full max-w-[320px]
                h-full
                transition
                bg-white
                border-0
                text-gray-900
                hover:bg-violet-50/30
                cursor-pointer
                shadow-none
                font-sans
                p-6
            "
        >
            <CardHeader className="flex flex-col items-start gap-3 pt-0 pb-4 w-full px-0">
                <div className="rounded-lg bg-gradient-to-br from-violet-600 to-violet-400 p-3 w-fit">
                    <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2">
                    <CardTitle className="text-xl font-bold text-gray-900">{title}</CardTitle>
                    {subtitle && (
                        <p className="text-sm font-medium text-violet-600">{subtitle}</p>
                    )}
                </div>
            </CardHeader>
            <CardContent className="px-0 pb-6 flex-1">
                <CardDescription className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {description}
                </CardDescription>
                <ul className="list-none space-y-2 pl-0 text-sm">
                     {features.map((feature, index) => (
                     <li key={index} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-500 inline-block flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter className="px-0 pt-0">
                <button className="bg-white text-violet-700 text-sm font-medium px-4 py-2 rounded-lg border border-violet-200 hover:bg-violet-50 transition-colors w-full">
                    {buttonlabel}
                </button>
            </CardFooter>
        </Card>
    </div>
    )
    
}