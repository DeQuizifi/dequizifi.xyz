'use client'
import { Github, Heart, MessageCircle, Sparkles, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
import {Logo} from "./logo";

type NavItem = { label: string; href: string };

const PLATFORM: NavItem[] = [
  { label: "Quizzes", href: "#" },
  { label: "Leaderboard", href: "#" },
  { label: "Earn Tokens", href: "#" },
  { label: "Trading", href: "#" },
];

const COMMUNITY: NavItem[] = [
  { label: "Farcaster", href: "#" },
  { label: "Discord", href: "#" },
  { label: "Documentation", href: "#" },
  { label: "API", href: "#" },
];

function NavColumn({ title, items }: { title: string; items: NavItem[] }) {
  return (
    <div className="space-y-5">
      <h3 className="font-bold text-lg text-foreground/90 tracking-wide mb-2 uppercase letter-spacing-wide">
        {title}
      </h3>
      <nav className="flex flex-col gap-2" aria-label={title}>
        {items.map((it) => (
          <Link
            key={it.label}
            href={it.href}
            className="relative group text-sm font-medium text-muted-foreground transition-colors duration-300 py-1 px-2 rounded-md hover:text-primary focus:outline-none hover:font-bold"
          >
            <span className="transition-all duration-300 group-hover:pl-2">{it.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

function SocialLinks() {
  const links: { href: string; label: string; icon: React.ReactElement }[] = [
    {
      href: "#",
      label: "Twitter",
      icon: <Twitter className="w-6 h-6" aria-hidden />,
    },
    {
      href: "#",
      label: "GitHub",
      icon: <Github className="w-6 h-6" aria-hidden />,
    },
    {
      href: "#",
      label: "Discord",
      icon: <MessageCircle className="w-6 h-6" aria-hidden />,
    },
  ];

  return (
    <div className="flex items-center gap-5 order-1 w-full sm:w-auto justify-start">
      {links.map((l) => (
        <Link
          key={l.label}
          href={l.href}
          title={l.label}
          aria-label={l.label}
          className="group rounded-full p-2 bg-gradient-to-tr from-background via-sidebar to-background shadow hover:from-primary/20 hover:to-secondary/20 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all duration-200"
        >
          <span className="text-muted-foreground group-hover:text-primary transition-colors duration-200">
            {l.icon}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default function Footer(): React.ReactElement {
  const year = new Date().getFullYear();

  return (
    <div className="relative w-full">
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Circle */}
        <div className="absolute left-10 bottom-10 w-32 h-32 rounded-full bg-gradient-to-tr from-primary/40 to-secondary/30 animate-pulse" />
        {/* Square */}
        <div className="absolute right-20 top-1 w-24 h-24 bg-gradient-to-br from-secondary/40 to-primary/30 rounded-xl rotate-12 animate-pulse" />
      </div>

      <footer
        aria-label="Site Footer"
        className="relative z-10 bg-white/10 backdrop-blur-sm border-t py-12 px-4 sm:py-20 sm:px-8 lg:px-12 shadow-inner rounded-t-[4rem]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16">
            <div className="md:col-span-2 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                  <Logo variant="big" />
              </div>

              <p className="text-muted-foreground/90 text-base leading-relaxed max-w-lg animate-fade-in">
                The most elegant DeFi education platform built for the Farcaster community. Learn, earn, and connect through beautiful quiz experiences on DeQuiziFi.
              </p>
            </div>

            <NavColumn title="Platform" items={PLATFORM} />
            <NavColumn title="Community" items={COMMUNITY} />
          </div>

          <div className="mt-14 pt-8 border-t border-border animate-fade-in">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <SocialLinks />

              <div className="flex items-center gap-2 text-sm text-muted-foreground order-2 w-full sm:w-auto justify-start">
                <span>© {year} DeQuiziFi. Built with</span>
                <span className="inline-flex items-center">
                  <Heart className="w-4 h-4 fill-primary text-primary animate-pulse mx-1" />
                </span>
                <span>for the crypto community on DeQuiziFi.</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Hexagon clip-path utility (can be moved to CSS file) */}
      <style jsx>{`
        .clip-hexagon {
          clip-path: polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%);
        }
      `}</style>
    </div>
  );
}
