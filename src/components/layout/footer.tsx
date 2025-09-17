import { Github, Heart, MessageCircle, Sparkles, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

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
    <div className="space-y-4">
      <h3 className="font-semibold text-foreground text-base">{title}</h3>
      <nav className="space-y-3" aria-label={title}>
        {items.map((it) => (
          <Link
            key={it.label}
            href={it.href}
            className="block text-sm text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors duration-150"
          >
            {it.label}
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
      icon: <Twitter className="w-5 h-5" aria-hidden />,
    },
    {
      href: "#",
      label: "GitHub",
      icon: <Github className="w-5 h-5" aria-hidden />,
    },
    {
      href: "#",
      label: "Discord",
      icon: <MessageCircle className="w-5 h-5" aria-hidden />,
    },
  ];

  return (
    <div className="flex items-center space-x-4 order-1 w-full sm:w-auto justify-start">
      {links.map((l) => (
        <Link
          key={l.label}
          href={l.href}
          title={l.label}
          aria-label={l.label}
          className="text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors duration-150"
        >
          {l.icon}
        </Link>
      ))}
    </div>
  );
}

export default function Footer(): React.ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer
      aria-label="Site Footer"
      className="bg-sidebar border-t border-border py-10 px-4 sm:py-16 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center">
              <div className="w-14 h-14 bg-gradient-to-br rounded-2xl flex items-center justify-center">
                <Sparkles className="w-8 h-8" />
              </div>
              <span className="ml-4 text-4xl font-extrabold footer-brand-gradient">
                DeQuiziFi
              </span>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              The most elegant DeFi education platform built for the Farcaster
              community. Learn, earn, and connect through beautiful quiz
              experiences on DeQuiziFi.
            </p>

            <div className="inline-block">
              <span className="rounded-full px-5 py-1 text-sm font-semibold shadow-sm">
                Farcaster Native on DeQuiziFi
              </span>
            </div>
          </div>

          <NavColumn title="Platform" items={PLATFORM} />
          <NavColumn title="Community" items={COMMUNITY} />
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <SocialLinks />

            <div className="flex items-center space-x-1 text-sm text-muted-foreground order-2 w-full sm:w-auto justify-start">
              <span>© {year} DeQuiziFi. Built with</span>
              <Heart className="w-4 h-4 fill-current" />
              <span>for the crypto community on DeQuiziFi.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
