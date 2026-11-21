"use client";

import { motion } from "framer-motion";
import { Code, Layers, Database, Cpu, Zap, Users } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SKILL_GROUPS } from "@/data";

const ICONS: Record<string, React.ElementType> = {
  backend: Code,
  frontend: Layers,
  "ai-ml": Cpu,
  database: Database,
  tools: Zap,
  professional: Users,
};

export default function Skills() {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <main className="flex-1">
        <section className="pt-20 pb-32">
          <div className="container mx-auto px-4">
            <SectionHeading
              subheading="Technical Skills"
              heading="Organized by engineering discipline — no invented proficiency metrics."
            />
            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SKILL_GROUPS.map((group) => {
                const Icon = ICONS[group.id] || Code;
                return (
                  <motion.div
                    key={group.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -6 }}
                    className="p-6 rounded-xl border border-border bg-surface hover:border-primary/50 transition-colors"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-primary-text mb-3">
                      {group.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-12 p-6 rounded-xl border border-border bg-surface text-center">
              <p className="text-sm text-secondary-text">
                Proficiency is demonstrated through projects and experience
                rather than arbitrary percentage bars.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
