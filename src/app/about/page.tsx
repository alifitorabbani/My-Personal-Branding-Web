"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Globe, ExternalLink, Code, GraduationCap } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PERSON, EXPERIENCE } from "@/data";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const academic = EXPERIENCE.filter((e) => e.type === "academic");

  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <main className="flex-1">
        <section className="pt-20 pb-32 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <SectionHeading
                  subheading="About Me"
                  heading="Software engineer, problem solver, and lifelong learner."
                />
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-lg text-secondary-text leading-relaxed mb-6"
                >
                  Hi, I&apos;m Alifito Rabbani Cahyono. I am a software engineer
                  focused on full-stack development, AI/ML, and intelligent
                  software systems. I enjoy turning complex problems into
                  scalable and meaningful solutions.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    href={PERSON.social.github}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface text-sm font-medium text-secondary-text hover:text-primary-text hover:border-primary/50 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" /> GitHub
                  </Link>
                  <Link
                    href={PERSON.social.linkedin}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface text-sm font-medium text-secondary-text hover:text-primary-text hover:border-primary/50 transition-colors"
                  >
                    <Globe className="h-4 w-4" /> LinkedIn
                  </Link>
                  <a
                    href={PERSON.social.email}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface text-sm font-medium text-secondary-text hover:text-primary-text hover:border-primary/50 transition-colors"
                  >
                    <Mail className="h-4 w-4" /> Email
                  </a>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block relative"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent blur-2xl rounded-full" />
                  <div className="relative rounded-3xl border border-border bg-elevated p-2 shadow-2xl">
                    <div className="rounded-3xl border border-border bg-surface p-8 flex flex-col items-center">
                      <div className="w-32 h-32 rounded-full border border-border bg-elevated flex items-center justify-center mb-4 overflow-hidden">
                        <div className="w-full h-full bg-surface/50 flex items-center justify-center">
                          <GraduationCap className="h-12 w-12 text-secondary-text" />
                        </div>
                      </div>
                      <h3 className="text-xl font-heading font-bold text-primary-text">
                        Alifito Rabbani Cahyono
                      </h3>
                      <p className="text-sm text-secondary-text">
                        Software Engineer &amp; AI/ML Enthusiast
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Interests */}
        <section className="py-24 border-y border-border">
          <div className="container mx-auto px-4">
            <SectionHeading
              subheading="Technical Interests"
              heading="Areas of engineering curiosity and professional focus."
            />
            <div className="mt-16 grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Frontend Engineering",
                  desc: "Building responsive, accessible, and performant user interfaces with React, Next.js, and Tailwind CSS.",
                },
                {
                  title: "Backend Engineering",
                  desc: "Designing scalable RESTful APIs and server-side systems with Java Spring Boot, Laravel, and Node.js.",
                },
                {
                  title: "AI & Machine Learning",
                  desc: "Applying scikit-learn, TensorFlow, NumPy, and Pandas to classification, prediction, and data analysis.",
                },
                {
                  title: "Enterprise Software",
                  desc: "Developing workflow engines, RBAC systems, audit trails, and admin dashboards for organizational needs.",
                },
                {
                  title: "Database Management",
                  desc: "Designing and managing PostgreSQL databases with a focus on integrity, performance, and reliability.",
                },
                {
                  title: "Workflow Automation",
                  desc: "Implementing business process automation with Flowable BPM and service-based workflow architectures.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-6 rounded-xl border border-border bg-surface hover:border-primary/50 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary mb-4">
                    <Code className="h-5 w-5" />
                  </div>
                  <h4 className="font-semibold text-primary-text mb-2">{item.title}</h4>
                  <p className="text-sm text-secondary-text leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Journey */}
        <section className="py-24 bg-surface/50">
          <div className="container mx-auto px-4">
            <SectionHeading
              subheading="Academic Journey"
              heading="Education and Teaching Experience"
            />
            <div className="mt-16 space-y-8">
              {/* Education */}
              <div className="space-y-6">
                <h3 className="text-sm font-heading font-bold text-secondary-text tracking-wider uppercase">
                  Education
                </h3>
                {academic
                  .filter((e) => e.position.includes("Degree") || e.position.includes("High School"))
                  .map((exp) => (
                    <div key={exp.id} className="flex gap-6">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center text-primary font-mono text-sm">
                        {exp.startDate.slice(0, 4)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-heading font-bold text-primary-text">
                            {exp.position}
                          </span>
                          <span className="text-xs font-mono text-secondary-text">
                            {exp.startDate.slice(0, 4)} –{" "}
                            {exp.endDate ? exp.endDate.slice(0, 4) : "Present"}
                          </span>
                        </div>
                        <p className="text-sm text-secondary-text">{exp.company}</p>
                        <p className="text-sm text-primary-text leading-relaxed mt-1">
                          {exp.description}
                        </p>
                        {exp.technologies.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {exp.technologies.map((r) => (
                              <Badge key={r} variant="secondary" className="text-xs">
                                {r}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>

              {/* Teaching Experience */}
              <div className="space-y-6">
                <h3 className="text-sm font-heading font-bold text-secondary-text tracking-wider uppercase">
                  Teaching Experience
                </h3>
                {academic
                  .filter(
                    (e) =>
                      !e.position.includes("Degree") &&
                      !e.position.includes("High School")
                  )
                  .map((exp) => (
                    <div key={exp.id} className="flex gap-6">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center text-primary font-mono text-sm">
                        {exp.startDate.slice(0, 4)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-heading font-bold text-primary-text">
                            {exp.position}
                          </span>
                          <span className="text-xs font-mono text-secondary-text">
                            {exp.startDate.slice(0, 4)} –{" "}
                            {exp.endDate ? exp.endDate.slice(0, 4) : "Present"}
                          </span>
                        </div>
                        <p className="text-sm text-secondary-text">{exp.company}</p>
                        <p className="text-sm text-primary-text leading-relaxed mt-1">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto rounded-xl border border-border bg-card p-8 md:p-12 text-center shadow-lg">
              <h2 className="text-3xl font-heading font-bold tracking-tight text-primary-text mb-4">
                Let&apos;s build something meaningful
              </h2>
              <p className="text-lg text-secondary-text mb-8">
                I&apos;m open to conversations about engineering challenges,
                collaborations, and opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={PERSON.social.email}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  <Mail className="h-4 w-4" /> Send an Email
                </a>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/resume">View Resume</Link>
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
