"use client";
import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge"; // removed for now
import { Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Create keyframes for sparkle animation
  const sparkleKeyframes = `
    @keyframes sparkleRotate {
      0%, 25% { 
        transform: rotate(0deg); 
        filter: drop-shadow(0 0 0 transparent); 
      }
      35% { 
        transform: rotate(90deg); 
        filter: drop-shadow(0 0 2px currentColor); 
      }
      45% { 
        transform: rotate(180deg); 
        filter: drop-shadow(0 0 3px currentColor); 
      }
      55% { 
        transform: rotate(270deg); 
        filter: drop-shadow(0 0 2px currentColor); 
      }
      65%, 75% { 
        transform: rotate(360deg); 
        filter: drop-shadow(0 0 1px currentColor); 
      }
      80% { 
        transform: rotate(270deg); 
        filter: drop-shadow(0 0 2px currentColor); 
      }
      85% { 
        transform: rotate(180deg); 
        filter: drop-shadow(0 0 3px currentColor); 
      }
      90% { 
        transform: rotate(90deg); 
        filter: drop-shadow(0 0 2px currentColor); 
      }
      95% { 
        transform: rotate(45deg); 
        filter: drop-shadow(0 0 1px currentColor); 
      }
      100% { 
        transform: rotate(0deg); 
        filter: drop-shadow(0 0 0 transparent); 
      }
    }
    .sparkle-animated {
      animation: sparkleRotate 12s linear infinite;
    }
    @media (prefers-reduced-motion: reduce) {
      .sparkle-animated {
        animation: none !important;
      }
    }
  `;

  return (
    <>
      <style>{sparkleKeyframes}</style>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-hero-gradient-from/80 to-hero-gradient-to/80 backdrop-blur-md border-b border-border/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="p-0 bg-transparent">
                <Sparkles
                  className="w-6 h-6 text-primary origin-center sparkle-animated"
                  aria-hidden="true"
                />
              </div>
              <h1 className="text-xl font-bold text-foreground">DeQuiziFi</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#stats"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Stats
              </a>
              <a
                href="#faq"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                FAQ
              </a>
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
              <button className="font-semibold px-4 py-2 rounded-xl shadow-lg transition-transform duration-200 bg-gradient-to-r from-[var(--color-hero-gradient-from)] to-[var(--color-hero-gradient-to)] text-background hover:scale-105 hover:shadow-xl hover:opacity-90 text-sm whitespace-nowrap">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-16 py-4 border-t border-border/20 bg-background/90 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-foreground hover:text-foreground/80 transition-colors"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-foreground hover:text-foreground/80 transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#stats"
                className="text-foreground hover:text-foreground/80 transition-colors"
              >
                Stats
              </a>
              <a
                href="#faq"
                className="text-foreground hover:text-foreground/80 transition-colors"
              >
                FAQ
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
                <Button variant="gradient" size="sm">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
