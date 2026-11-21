"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, RefreshCw, FileText, Users, Layers, Target, Mail } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RESEARCH, PERSON } from "@/data";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Research() {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <main className="flex-1">
        <section className="pt-20 pb-24">
          <div className="container mx-auto px-4">
            <SectionHeading
              subheading="Academic Research"
              heading="Final-Year Research in Progress"
            />
            <p className="mt-6 text-lg text-secondary-text leading-relaxed max-w-2xl mx-auto text-center">
              Current academic research exploring multimodal learning and
              explainable AI for mental health analysis on social media X.
            </p>
          </div>
        </section>

        <section className="py-24 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-xl border border-border bg-surface p-8 md:p-12"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 text-primary">
                    <Brain className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-bold text-primary-text mb-2">
                      {RESEARCH.title}
                    </h2>
                    <Badge variant="outline" className="text-xs mb-3">
                      {RESEARCH.status.replace("-", " ").toUpperCase()}
                    </Badge>
                    <p className="text-primary-text leading-relaxed mb-4">
                      {RESEARCH.description}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="p-4 rounded-lg bg-surface/50 border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="h-4 w-4 text-secondary-text" />
                      <span className="text-xs font-mono text-secondary-text">
                        Faculty
                      </span>
                    </div>
                    <p className="text-sm text-primary-text">{RESEARCH.faculty}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-surface/50 border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Layers className="h-4 w-4 text-secondary-text" />
                      <span className="text-xs font-mono text-secondary-text">
                        Concentration
                      </span>
                    </div>
                    <p className="text-sm text-primary-text">
                      {RESEARCH.concentration}
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-surface/50 border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <RefreshCw className="h-4 w-4 text-secondary-text" />
                      <span className="text-xs font-mono text-secondary-text">
                        Started
                      </span>
                    </div>
                    <p className="text-sm text-primary-text">
                      {RESEARCH.startedAt}
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-surface/50 border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-4 w-4 text-secondary-text" />
                      <span className="text-xs font-mono text-secondary-text">
                        Dataset Target
                      </span>
                    </div>
                    <p className="text-sm text-primary-text">
                      {RESEARCH.datasetTarget}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="text-lg font-heading font-semibold text-primary-text">
                    Research Interests
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {RESEARCH.interests.map((interest, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="px-3 py-1.5 rounded-full border border-border bg-surface text-xs text-secondary-text hover:border-primary/50 hover:text-primary-text transition-colors"
                      >
                        {interest}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-secondary-text italic">
                    {RESEARCH.note}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto rounded-xl border border-border bg-card p-8 md:p-12 text-center shadow-lg">
              <h2 className="text-3xl font-heading font-bold tracking-tight text-primary-text mb-4">
                Interested in Collaborating?
              </h2>
              <p className="text-lg text-secondary-text mb-8">
                Open to discussions about machine learning, data science, and
                intelligent systems research.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={PERSON.social.email}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  <Mail className="h-4 w-4" /> Send an Email
                </a>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contact">Contact Form</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
