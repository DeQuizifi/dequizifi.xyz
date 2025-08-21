import { Heart, Twitter, Github, MessageCircle, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-white border-t border-border py-10 px-4 sm:py-16 sm:px-6 lg:px-8"
      aria-label="Site Footer"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div
                className="w-14 h-14 bg-gradient-to-br rounded-2xl flex items-center justify-center"
                style={{
                  backgroundImage: `linear-gradient(135deg, var(--color-footer-gradient-from), var(--color-footer-gradient-to))`,
                }}
              >
                <Sparkles
                  className="w-8 h-8"
                  style={{ color: "var(--color-footer-icon)" }}
                />
              </div>
              <span
                className="ml-4 text-4xl font-extrabold footer-brand-gradient"
                style={{
                  letterSpacing: "-1px",
                }}
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
              <span
                className="rounded-full px-5 py-1 text-sm font-semibold shadow-sm"
                style={{
                  border: "1px solid var(--color-footer-badge-border)",
                  background: "var(--color-footer-badge-bg)",
                  color: "var(--color-footer-badge-text)",
                }}
              >
                Farcaster Native
              </span>
            </div>
          </div>

          {/* Platform Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground text-base">
              Platform
            </h3>
            <nav className="space-y-3" aria-label="Platform">
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
            <nav className="space-y-3" aria-label="Community">
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
              <Heart
                className="w-4 h-4 fill-current"
                style={{ color: "var(--color-footer-heart)" }}
              />
              <span>for the crypto community.</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter
                  className="w-5 h-5"
                  style={{ color: "var(--color-foreground)" }}
                />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github
                  className="w-5 h-5"
                  style={{ color: "var(--color-foreground)" }}
                />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Discord"
              >
                <MessageCircle
                  className="w-5 h-5"
                  style={{ color: "var(--color-foreground)" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
