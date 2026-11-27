"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import Link from "next/link";

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun h-4 w-4"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon h-4 w-4"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.343.215.782.405.803.402"/></svg>
);

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/leadership", label: "Leadership" },
  { href: "/skills", label: "Skills" },
  { href: "/research", label: "Research" },
  { href: "/timeline", label: "Timeline" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

interface NavbarProps {}

export function Navbar() {
  const { setTheme, theme } = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-8 h-16 flex items-center justify-center gap-4">
        <Link
          href="/"
          className="font-heading font-bold text-lg tracking-tight text-primary-text hover:text-primary transition-colors"
        >
          Afrabbanii
        </Link>

        <div className="hidden md:flex items-center gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-secondary-text transition-colors hover:text-primary-text whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Theme" suppressHydrationWarning>
                {theme === "dark" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")} className="flex items-center gap-2 whitespace-nowrap">
                <SunIcon /> Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")} className="flex items-center gap-2 whitespace-nowrap">
                <MoonIcon /> Dark
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="default"
            size="sm"
            className="hidden md:block min-w-fit"
          >
            <a href="/contact" className="flex items-center gap-2 px-3 py-2 whitespace-nowrap">
              Get in Touch
            </a>
          </Button>

          <button
            className="md:hidden p-2 text-secondary-text hover:text-primary-text shrink-0"
            aria-label="Open mobile menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
