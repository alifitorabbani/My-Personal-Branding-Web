"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { CurrentYear } from "@/components/ui/current-year";

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun h-3.5 w-3.5"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon h-3.5 w-3.5"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.343.215.782.405.803.402"/></svg>
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

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open mobile menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-0 w-[260px]">
        <SheetHeader className="px-6 py-4 border-b border-border">
          <SheetTitle className="font-heading font-bold text-lg tracking-tight">
            Afrabbanii
          </SheetTitle>
        </SheetHeader>
        <nav className="px-6 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => onOpenChange(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-secondary-text transition-colors hover:bg-elevated hover:text-primary-text"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="px-6 py-4 border-t border-border">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-medium text-secondary-text">Theme</span>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="w-auto"
                suppressHydrationWarning
              >
                {theme === "dark" ? <MoonIcon /> : <SunIcon />}
              </Button>
          </div>
          <a
            href="/contact"
            className="flex w-full items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 transition-colors"
          >
            Get in Touch
          </a>
        </div>
        <SheetFooter className="px-6 py-4 border-t border-border">
          <p className="text-xs text-secondary-text">
            <CurrentYear /> Afrabbanii
          </p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
