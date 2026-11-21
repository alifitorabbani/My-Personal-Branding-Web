"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Users, Calendar } from "lucide-react";
import React from "react";
import { Container } from "@/components/layout/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { EXPERIENCE, ORGANIZATIONAL_EXPERIENCE, COMMITTEE_EXPERIENCE } from "@/data";

type Category = "all" | "professional" | "academic" | "organizational" | "committee";

const CATEGORY_LABELS: Record<Category, string> = {
  all: "All",
  professional: "Professional",
  academic: "Academic",
  organizational: "Organizational",
  committee: "Committee & Events",
};

const ICON_MAP: Record<string, React.ElementType> = {
  professional: Briefcase,
  academic: GraduationCap,
  organizational: Users,
  committee: Calendar,
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  const [category, setCategory] = React.useState<Category>("all");

  const filteredExperience = EXPERIENCE.filter(
    (e) => category === "all" || e.type === category
  );
  const filteredOrganizational = ORGANIZATIONAL_EXPERIENCE.filter(
    () => category === "all" || category === "organizational"
  );
  const filteredCommittee = COMMITTEE_EXPERIENCE.filter(
    () => category === "all" || category === "committee"
  );

  const allItems = [
    ...filteredExperience.map((e) => ({ ...e, section: "professional" as const })),
    ...filteredOrganizational.map((e) => ({ ...e, section: "organizational" as const })),
    ...filteredCommittee.map((e) => ({ ...e, section: "committee" as const })),
  ].sort(
    (a, b) =>
      new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  const categoryOptions: Category[] = [
    "all",
    "professional",
    "academic",
    "organizational",
    "committee",
  ];

  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <main className="flex-1">
        <section className="pt-20 pb-12">
          <div className="container mx-auto px-4">
            <SectionHeading
              subheading="Experience"
              heading="Professional & Academic Journey"
            />
            <div className="mt-10 flex flex-wrap gap-2 justify-center">
              {categoryOptions.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    category === cat
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-surface text-secondary-text hover:border-primary/50 hover:text-primary-text"
                  }`}
                >
                  {CATEGORY_LABELS[cat]}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="mt-16 space-y-16">
                {allItems.map((item, i) => {
                  const Icon = ICON_MAP[item.section];
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.06 }}
                      className="relative text-center"
                    >
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <Icon className="h-4 w-4 text-primary shrink-0" />
                        <div className="text-left">
                          <span className="font-heading font-semibold text-primary-text">
                            {item.position}
                          </span>
                          <br />
                          <span className="text-xs font-mono text-secondary-text">
                            {item.startDate.slice(0, 4)} –{" "}
                            {item.endDate ? item.endDate.slice(0, 4) : "Present"}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-secondary-text mb-2">
                        {item.type === "professional"
                          ? (item as any).company
                          : (item as any).organization}
                      </p>
                      <p className="text-sm text-primary-text leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                      {item.responsibilities.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5 justify-center">
                          {item.responsibilities.slice(0, 3).map((r) => (
                            <Badge
                              key={r}
                              variant="secondary"
                              className="text-xs"
                            >
                              {r}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
