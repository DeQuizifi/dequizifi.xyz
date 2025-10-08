"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {Logo} from "./logo";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (
    <>
      <style>{`
        .nav-link-underline {
          position: relative;
          overflow: hidden;
        }
        .nav-link-underline::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, var(--color-hero-gradient-from), var(--color-hero-gradient-to));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-link-underline:hover::after, .nav-link-underline:focus-visible::after {
          transform: scaleX(1);
        }
      `}</style>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}


            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-foreground hover:text-primary hover:scale-105 hover:font-bold duration-300">
                Features
              </Link>
              <Link href="#testimonials" className="text-foreground hover:text-primary hover:scale-105 hover:font-bold duration-300">
                Testimonials
              </Link>
              <Link href="#stats" className="text-foreground hover:text-primary hover:scale-105 hover:font-bold duration-300">
                Stats
              </Link>
              <Link href="#faq" className="text-foreground hover:text-primary hover:scale-105 hover:font-bold duration-300">
                FAQ
              </Link>
              <Button variant="outline">
                Sign In
              </Button>
              <Button className="border">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
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
        <div
          id="mobile-menu"
          className="md:hidden mt-16 py-4 border-t border-border/20 bg-background/90 backdrop-blur-sm"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              <Link href="#features" className="text-foreground hover:text-foreground/80 transition-colors nav-link-underline">
                Features
              </Link>
              <Link href="#testimonials" className="text-foreground hover:text-foreground/80 transition-colors nav-link-underline">
                Testimonials
              </Link>
              <Link href="#stats" className="text-foreground hover:text-foreground/80 transition-colors nav-link-underline">
                Stats
              </Link>
              <Link href="#faq" className="text-foreground hover:text-foreground/80 transition-colors nav-link-underline">
                FAQ
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm">
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
