import React from "react"
import { Card } from "@/components/ui/card"

type HowItWorksCardProps = {
  icon: React.ElementType
  title: string
  description: string
  color: string
  delay?: string
  index: number
}

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({ icon: Icon, title, description, color, delay, index }) => {
  return (
    <Card
      className="relative p-8 text-center group hover:shadow-card-hover transition-all duration-500 glass-effect border-0"
      style={{ animationDelay: delay }}
    >
      {/* Step Number */}
      <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-lg">
        {index + 1}
      </div>

      {/* Icon */}
      <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${color} p-4 shadow-gorgeous group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-full h-full text-white" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </Card>
  )
}

export default HowItWorksCard
