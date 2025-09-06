import { BookOpen, Trophy, Users, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: BookOpen,
    title: "Learn & Study",
    description: "Access comprehensive DeFi courses and interactive content designed for all skill levels",
    color: "from-blue-500 to-cyan-500",
    delay: "0ms"
  },
  {
    icon: Zap,
    title: "Take Quizzes",
    description: "Test your knowledge with engaging quizzes and earn points for correct answers",
    color: "from-purple-500 to-pink-500",
    delay: "200ms"
  },
  {
    icon: Trophy,
    title: "Earn Rewards", 
    description: "Collect tokens, badges, and NFT certificates as you complete learning milestones",
    color: "from-yellow-500 to-orange-500",
    delay: "400ms"
  },
  {
    icon: Users,
    title: "Join Community",
    description: "Connect with fellow learners in the Farcaster ecosystem and share your achievements",
    color: "from-green-500 to-emerald-500",
    delay: "600ms"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-secondary opacity-50" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 floating-animation blur-xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 floating-animation blur-xl" style={{animationDelay: "3s"}} />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium glass-effect">
            Simple Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Master DeFi in four simple steps and become part of the most innovative crypto education community
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon as React.ElementType;
            return (
              <Card 
                key={index}
                className="relative p-8 text-center group hover:shadow-card-hover transition-all duration-500 glass-effect border-0"
                style={{animationDelay: step.delay}}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-lg">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${step.color} p-4 shadow-gorgeous group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </Card>
            );
          })}
        </div>

        
      
      </div>
    </section>
  );
};

export default HowItWorks;