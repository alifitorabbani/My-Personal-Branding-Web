"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Users, Calendar, RefreshCw, FileText, Target } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { TIMELINE_ENTRIES } from "@/data";

type TimelineCategory = "all" | "education" | "experience" | "project" | "leadership" | "event" | "research";

const CATEGORY_LABELS: Record<TimelineCategory, string> = {
  all: "All",
  education: "Education",
  experience: "Experience",
  project: "Projects",
  leadership: "Leadership",
  event: "Events",
  research: "Research",
};

const ITEM_ICONS: Record<TimelineCategory, React.ElementType> = {
  all: Briefcase,
  education: GraduationCap,
  experience: Briefcase,
  project: RefreshCw,
  leadership: Users,
  event: Calendar,
  research: Target,
};

const CATEGORY_STYLES: Record<TimelineCategory, string> = {
  all: "bg-primary text-primary-foreground",
  education: "border border-blue-500/30 bg-blue-500/10 text-blue-400 hover:border-blue-500/50",
  experience: "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:border-emerald-500/50",
  project: "border border-violet-500/30 bg-violet-500/10 text-violet-400 hover:border-violet-500/50",
  leadership: "border border-orange-500/30 bg-orange-500/10 text-orange-400 hover:border-orange-500/50",
  event: "border border-amber-500/30 bg-amber-500/10 text-amber-400 hover:border-amber-500/50",
  research: "border border-pink-500/30 bg-pink-500/10 text-pink-400 hover:border-pink-500/50",
};

export default function Timeline() {
  const [category, setCategory] = React.useState<TimelineCategory>("all");

  const categories: TimelineCategory[] = [
    "all",
    "education",
    "experience",
    "project",
    "leadership",
    "event",
    "research",
  ];

  const filtered = TIMELINE_ENTRIES.filter(
    (e) => category === "all" || e.category === category
  );

  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <main className="flex-1">
        <section className="pt-20 pb-24">
          <div className="container mx-auto px-4">
            <SectionHeading
              subheading="Career Timeline"
              heading="Chronological Journey from 2022 to Today"
            />
            <p className="mt-6 text-lg text-secondary-text leading-relaxed max-w-2xl mx-auto text-center">
              A chronological view of leadership, organizational, academic, and
              professional experiences. Activities may overlap — this is not a
              forced linear progression.
            </p>
            <div className="mt-10 flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    category === cat
                      ? CATEGORY_STYLES[cat]
                      : "border border-border bg-surface text-secondary-text hover:border-primary/50 hover:text-primary-text"
                  }`}
                >
                  {CATEGORY_LABELS[cat]}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-32 relative">
          <div className="container mx-auto px-4">
            <div className="relative mx-auto max-w-2xl">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden lg:block" />
              <div className="mt-16 space-y-10">
                {filtered.map((entry, i) => {
                  const Icon = ITEM_ICONS[entry.category];
                  const isLast = i === filtered.length - 1;
                  return (
                    <motion.div
                      key={entry.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="relative pl-12 pb-8"
                    >
                      {/* Timeline marker */}
                      <div className="absolute left-0 top-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary border-2 border-background z-10" />
                      </div>
                      {/* Connector line */}
                      {!isLast && (
                        <div className="absolute left-0 top-9 bottom-0 w-0.5 bg-border/50 hidden lg:block" />
                      )}
                      <div className="relative z-10">
                        <div className="flex items-start gap-3 mb-1.5">
                          <span className="text-xs font-mono font-bold text-primary">
                            {entry.year}
                          </span>
                          <Icon className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                        </div>
                        <span className="text-xs font-mono text-secondary-text block mb-1.5">
                          {entry.period}
                        </span>
                        <h4 className="text-sm font-heading font-semibold text-primary-text">
                          {entry.title}
                        </h4>
                        <p className="text-xs text-secondary-text mb-1">
                          {entry.organization}
                        </p>
                        <p className="text-sm text-primary-text leading-relaxed line-clamp-3">
                          {entry.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
                {filtered.length === 0 && (
                  <div className="text-center py-20">
                    <p className="text-secondary-text">No entries found for this category.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
