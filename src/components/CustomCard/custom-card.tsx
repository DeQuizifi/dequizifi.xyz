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


export default function CustomCard() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
       <Card
            className="
                group
                flex flex-col items-center justify-center
                w-[350px]
                transition
                bg-white
                border border-gray-200
                text-gray-900
                hover:bg-violet-50
                hover:border-violet-50
                cursor-pointer
                shadow
            "
            >

      <CardHeader className="flex flex-col items-start gap-4 pt-6 pb-2 w-full">
        <div className="rounded-xl bg-gradient-to-br from-violet-600 to-violet-400 p-3 w-fit">
      <div className="w-12 h-12 rounded-[12px] bg-[#8B5CF6] flex items-center justify-center">
        <Brain className="w-7 h-7 text-white" />
      </div>
    </div>
        <button className="bg-white text-violet-700 text-xs font-semibold px-3 py-1 rounded-full border border-violet-200 hover:bg-violet-100 transition">
            Learn
        </button>
      </CardHeader>

      <CardContent className="px-6 pt-2 pb-4 group-hover:text-violet-700 transition-colors">
        <CardTitle className="text-2xl font-bold mb-2 group-hover:text-violet-700 transition-colors">Deep DeFi Learning</CardTitle>
        <CardDescription className="text-base mb-4 text-gray-500">
          Master protocols, strategies, and concepts through interactive quizzes with real-time knowledge updates.
        </CardDescription>
        <ul className="list-none space-y-2 pl-0 text-sm">
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-violet-500 inline-block" />
            <div className="text-gray-500">1000+ Questions</div>
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-violet-500 inline-block" />
             <div className="text-gray-500">Real-time Updates</div>
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-violet-500 inline-block" />
            <div className="text-gray-500">Expert Content</div>
          </li>
        </ul>
      </CardContent>
    </Card>
    </div>
    )
    
}