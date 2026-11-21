import * as React from "react";
import { CurrentYear } from "@/components/ui/current-year";
import { PERSON } from "@/data";

const FOOTER_LINKS = [
  { label: "GitHub", href: PERSON.social.github, external: true },
  { label: "LinkedIn", href: PERSON.social.linkedin, external: true },
  { label: "Email", href: PERSON.social.email },
  { label: "Resume", href: "/resume" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-border pb-8">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-lg tracking-tight text-primary-text">
              Alifito Rabbani Cahyono
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-secondary-text">
            {(FOOTER_LINKS as readonly { label: string; href: string; external?: boolean }[]).map(
              (link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="transition-colors hover:text-primary-text"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          <div className="flex items-center gap-3 text-xs text-secondary-text">
            <span className="hidden md:inline">Built with Next.js</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Tailwind CSS</span>
            <span className="hidden md:inline">•</span>
            <span>Motion</span>
          </div>
        </div>

        <p className="mt-8 text-xs text-secondary-text text-center">
          {<CurrentYear />} Alifito Rabbani Cahyono. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
