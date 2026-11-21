"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Layers,
  Smartphone,
  Laptop,
  Code2,
  Brain,
  Database,
  Users,
  Target,
  RefreshCw,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  PERSON,
  PROJECTS,
  SKILL_GROUPS,
  EXPERIENCE,
  ORGANIZATIONAL_EXPERIENCE,
  COMMITTEE_EXPERIENCE,
  ACHIEVEMENTS,
  TIMELINE_ENTRIES,
  RESEARCH,
} from "@/data";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 6);
const technicalSkills = SKILL_GROUPS.filter(
  (g) =>
    g.id === "backend" ||
    g.id === "frontend" ||
    g.id === "ai-ml" ||
    g.id === "database"
);
const professionalExperience = EXPERIENCE.filter(
  (e) => e.type === "professional"
);
const leadershipHighlights = ORGANIZATIONAL_EXPERIENCE.slice(0, 4);
const recentTimeline = TIMELINE_ENTRIES.slice(0, 8);

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <main className="flex-1 relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPgo8L3N2Zz4=') opacity-20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
          <div className="relative container mx-auto px-4 z-10">
            <div
              className="grid lg:grid-cols-2 gap-12 items-center"
              style={{ animationDelay: "0ms" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-sm font-medium text-secondary-text">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  {PERSON.availability ? "Available for work" : "Open to conversations"}
                </div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-5xl md:text-7xl font-heading font-bold leading-none tracking-tight text-primary-text"
                >
                  Building Intelligent Systems.<br />
                  Engineering Meaningful Solutions.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-lg md:text-xl text-secondary-text leading-relaxed max-w-lg"
                >
                  I am an Informatics student and software engineer interested in
                  building reliable software systems, developing intelligent
                  applications, and solving real-world problems through
                  technology.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button size="lg" asChild className="w-full sm:w-auto">
                    <Link href="/projects">Explore My Work</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                    <Link href="/about">More About Me</Link>
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-8 flex items-center gap-3 text-sm text-secondary-text"
                >
                  <Code className="h-4 w-4" />
                  <span>
                    Next.js • React • TypeScript • Spring Boot • Laravel • Python
                  </span>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent blur-xl rounded-2xl" />
                  <div className="relative rounded-2xl border border-border bg-elevated p-1 shadow-2xl">
                    <div className="rounded-xl border border-border bg-surface p-6">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-red-500" />
                          <div className="h-2 w-2 rounded-full bg-yellow-500" />
                          <div className="h-2 w-2 rounded-full bg-emerald-500" />
                        </div>
                        <span className="text-xs font-mono text-secondary-text">
                          src/components/
                        </span>
                      </div>
                      <div className="space-y-3">
                        <div className="h-3 w-3/4 bg-elevated rounded" />
                        <div className="h-3 w-1/2 bg-elevated rounded" />
                        <div className="h-3 w-3/4 bg-elevated rounded" />
                        <div className="h-12 w-full bg-elevated rounded mt-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-24 border-y border-border">
          <div className="container mx-auto px-4">
            <SectionHeading
              subheading="Professional Introduction"
              heading="From Leadership to Engineering"
            />
            <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <p className="text-lg text-secondary-text leading-relaxed">
                  My journey began with leadership — organizing events, managing
                  teams, and coordinating student organizations. That foundation
                  in communication and decision-making carried naturally into
                  software engineering, where I learned to build systems that
                  serve real users.
                </p>
                <p className="text-lg text-secondary-text leading-relaxed">
                  Today, I work at the intersection of backend engineering,
                  full-stack development, and artificial intelligence. From
                  algorithm-based team formation to enterprise workflow
                  orchestration, I focus on creating intelligent, reliable
                  software that solves meaningful problems.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Badge variant="secondary">Software Engineering</Badge>
                  <Badge variant="secondary">Backend Development</Badge>
                  <Badge variant="secondary">Enterprise Systems</Badge>
                  <Badge variant="secondary">AI & Machine Learning</Badge>
                  <Badge variant="secondary">Leadership</Badge>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary-accent/20 rounded-2xl blur-2xl" />
                <div className="relative rounded-2xl border border-border bg-elevated p-8 shadow-lg">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-4">
                      <div className="p-4 rounded-lg bg-surface/50 border border-border">
                        <div className="flex items-center gap-3">
                          <Layers className="h-5 w-5 text-primary" />
                          <span className="text-sm font-semibold text-primary-text">
                            Leadership
                          </span>
                        </div>
                        <p className="text-xs text-secondary-text mt-2">
                          Student council, BPM HIMA IF, esports HR, event
                          management
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-surface/50 border border-border">
                        <div className="flex items-center gap-3">
                          <Code2 className="h-5 w-5 text-primary" />
                          <span className="text-sm font-semibold text-primary-text">
                            Software Development
                          </span>
                        </div>
                        <p className="text-xs text-secondary-text mt-2">
                          Full-stack applications, REST APIs, database design,
                          workflow systems
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="p-4 rounded-lg bg-surface/50 border border-border">
                        <div className="flex items-center gap-3">
                          <Database className="h-5 w-5 text-primary" />
                          <span className="text-sm font-semibold text-primary-text">
                            Enterprise Engineering
                          </span>
                        </div>
                        <p className="text-xs text-secondary-text mt-2">
                          Spring Boot, Flowable BPMN, Laravel, Django REST,
                          PostgreSQL
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-surface/50 border border-border">
                        <div className="flex items-center gap-3">
                          <Brain className="h-5 w-5 text-primary" />
                          <span className="text-sm font-semibold text-primary-text">
                            AI & Machine Learning
                          </span>
                        </div>
                        <p className="text-xs text-secondary-text mt-2">
                          Scikit-learn, Pandas, NumPy, classification,
                          genetic algorithms
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

            {/* Technical Specializations */}
        <section className="py-24 border-y border-border bg-surface/50">
          <div className="container mx-auto px-4">
            <SectionHeading
              subheading="Technical Specializations"
              heading="Engineering Disciplines"
            />
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {technicalSkills.map((group) => (
                <motion.div
                  key={group.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="p-6 rounded-xl border border-border bg-surface hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary mb-4 group-hover:scale-105 transition-transform duration-300">
                    {group.id === "backend" && <Code2 className="h-5 w-5" />}
                    {group.id === "frontend" && <Laptop className="h-5 w-5" />}
                    {group.id === "ai-ml" && <Brain className="h-5 w-5" />}
                    {group.id === "database" && <Database className="h-5 w-5" />}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-primary-text mb-3">
                    {group.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="text-xs hover:bg-primary/10 hover:border-primary/50 transition-colors group-hover:border-primary"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <SectionHeading
              subheading="Featured Projects"
              heading="Engineering Case Studies"
            />
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.slug}`}
                  className="group block"
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="p-6 rounded-xl border border-border bg-surface hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-primary-text mb-2">
                      {project.name}
                    </h3>
                    <p className="text-sm text-secondary-text line-clamp-3 mb-4">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center text-sm font-medium text-primary">
                      View case study <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button asChild>
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Experience Highlights */}
        <section className="py-24 border-y border-border bg-surface/50">
          <div className="container mx-auto px-4">
            <SectionHeading
              subheading="Professional Experience"
              heading="Engineering Roles"
            />
            <div className="mt-16 space-y-8">
              {professionalExperience.map((exp) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col sm:flex-row gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-border bg-surface flex items-center justify-center text-primary font-mono text-sm">
                    {exp.startDate.slice(0, 4)}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-heading font-bold text-primary-text">{exp.position}</span>
                      <span className="text-xs font-mono text-secondary-text">
                        {exp.startDate.slice(0, 4)} – {exp.endDate ? exp.endDate.slice(0, 4) : "Present"}
                      </span>
                    </div>
                    <p className="text-sm text-secondary-text mb-2">{exp.company}</p>
                    <p className="text-sm text-primary-text leading-relaxed">{exp.description}</p>
                    {exp.technologies.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Preview */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <SectionHeading
              subheading="Career Timeline"
              heading="Journey from 2022 to Today"
            />
            <div className="mt-16 relative lg:relative">
              <div className="hidden lg:block absolute left-3 top-0 bottom-0 w-0.5 bg-border" />
              {recentTimeline.map((entry, i) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative pl-4 lg:pl-12 pb-8"
                >
                  <div className="absolute left-0 top-2 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background hidden lg:block" />
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                    <span className="text-xs font-mono font-bold text-primary">{entry.year}</span>
                    <span className="text-xs text-secondary-text">{entry.period}</span>
                  </div>
                  <h4 className="text-sm font-heading font-semibold text-primary-text">{entry.title}</h4>
                  <p className="text-xs text-secondary-text">{entry.organization}</p>
                  <p className="text-xs text-secondary-text line-clamp-2 mt-1">{entry.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button asChild>
                <Link href="/timeline">View Full Timeline</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Research */}
        <section className="py-24 border-y border-border bg-surface/50">
          <div className="container mx-auto px-4">
            <SectionHeading
              subheading="Academic Research"
              heading="Final-Year Research"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-16 rounded-xl border border-border bg-surface p-6 md:p-8"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 text-primary">
                  <RefreshCw className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-heading font-semibold text-primary-text mb-2">
                    {RESEARCH.title}
                  </h3>
                  <p className="text-sm text-secondary-text leading-relaxed mb-4">
                    {RESEARCH.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {RESEARCH.interests.slice(0, 6).map((interest) => (
                      <Badge key={interest} variant="outline" className="text-xs">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-secondary-text">
                    <span>
                      <span className="font-semibold text-primary-text">{RESEARCH.status}</span> • {RESEARCH.startedAt}
                    </span>
                    <span>{RESEARCH.datasetTarget}</span>
                  </div>
                  <p className="text-xs text-secondary-text mt-4 italic">
                    {RESEARCH.note}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto rounded-xl border border-border bg-card p-8 md:p-12 text-center shadow-lg">
              <h2 className="text-3xl font-heading font-bold tracking-tight text-primary-text mb-4">
                Have an Interesting Idea or Opportunity?
              </h2>
              <p className="text-lg text-secondary-text mb-8">
                I&apos;m always interested in meaningful collaborations,
                engineering challenges, and opportunities to build impactful
                technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href={PERSON.social.linkedin}>Connect on LinkedIn</Link>
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
