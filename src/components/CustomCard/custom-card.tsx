import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Brain } from "lucide-react"
import { SiFuturelearn } from "react-icons/si";

type CustomCardProps = {
  title: string;
  description: string;
  features?: string[];
  buttonlabel: string;
  IconComponent?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function CustomCard({title,description,features=[],buttonlabel,IconComponent = Brain}: CustomCardProps) {
    return (
        <div className="bg-gray-50 rounded-md">
        <Card
            className="
                group
                flex flex-col items-center justify-center
                w-full max-w-[300px]
                h-full max-h-80
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
                <div className="rounded-sm bg-gradient-to-br from-violet-600 to-violet-400 p-2 w-fit">
                    <div className="w-8 h-8 rounded-sm bg-[#8B5CF6] flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-white" />
                    </div>
                </div>
                <button className="bg-white text-violet-700 text-[10px] font-semibold px-2 py-0.5 md:mt-1 rounded-full border border-violet-200 hover:bg-violet-100 transition">
                    {buttonlabel}
                </button>
            </CardHeader>
            <CardContent className="px-4 pb-2 group-hover:text-violet-700 transition-colors">
                <CardTitle className="text-lg font-bold mb-1 group-hover:text-violet-700 transition-colors">{title}</CardTitle>
                <CardDescription className="text-sm mb-2 text-gray-500">
                    {description}
                </CardDescription>
                <ul className="list-none space-y-1 pl-0 text-xs">
                     {features.map((feature, index) => (
                     <li key={index} className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-500 inline-block" />
                <div className="text-gray-500">{feature}</div>
              </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    </div>
    )
    
}