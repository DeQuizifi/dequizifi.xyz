import { Heart, Twitter, Github, MessageCircle, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border py-10 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-14 h-14 bg-gradient-to-br from-[#e08bfa] to-[#D1A1FF] rounded-2xl flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <span
                className="ml-4 text-4xl font-extrabold bg-gradient-to-r from-[#A78BFA] to-[#E9D8FD] bg-clip-text text-transparent"
                style={{ letterSpacing: "-1px" }}
              >
                DeQuizify
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              The most elegant DeFi education platform built for the Farcaster
              community. Learn, earn, and connect through beautiful quiz
              experiences.
            </p>
            <div className="inline-block">
              <span className="rounded-full border border-[#E9D8FD] bg-[#F6F3FF] px-5 py-1 text-sm font-semibold text-[#A78BFA] shadow-sm">
                Farcaster Native
              </span>
            </div>
          </div>

          {/* Platform Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-base">
              Platform
            </h3>
            <nav className="space-y-3">
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Quizzes
              </a>
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Leaderboard
              </a>
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Earn Tokens
              </a>
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Trading
              </a>
            </nav>
          </div>

          {/* Community Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-base">
              Community
            </h3>
            <nav className="space-y-3">
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Farcaster
              </a>
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Discord
              </a>
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Documentation
              </a>
              <a
                href="#"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                API
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>© 2024 DeQuizify. Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for the crypto community.</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Discord"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}