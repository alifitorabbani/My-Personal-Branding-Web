"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PROJECTS } from "@/data";
import type { Project } from "@/types";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function ProjectDetailContent({ project }: { project: Project }) {
  return (
    <div className="flex flex-col h-full">
      {/* Project Hero */}
      <section className="relative py-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <Link
                href="/projects"
                className="text-sm font-medium text-secondary-text hover:text-primary-text transition-colors"
              >
                <ArrowLeft className="mr-1.5 h-3.5 w-3.5" /> All Projects
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-2 flex items-center gap-2"
            >
              <Badge variant="outline" className="text-xs">
                {project.category}
              </Badge>
              <Badge variant="secondary" className="text-xs">
                {project.status}
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-heading font-bold leading-none tracking-tight text-primary-text mb-6"
            >
              {project.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-secondary-text leading-relaxed mb-8"
            >
              {project.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </motion.div>

            {project.demo && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 flex items-center gap-2"
              >
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-lg border border-border bg-surface text-sm font-medium text-secondary-text hover:border-primary/50 hover:text-primary-text transition-colors"
                >
                  Live Demo <ExternalLink className="ml-1 h-3.5 w-3.5" />
                </a>
              </motion.div>
            )}
            {project.github && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 flex items-center gap-2"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-lg border border-border bg-surface text-sm font-medium text-secondary-text hover:border-primary/50 hover:text-primary-text transition-colors"
                >
                  <ExternalLink className="h-4 w-4" /> View Source
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Case Study Sections */}
      <section className="py-24 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-heading font-bold text-primary-text">
                Project Overview
              </h2>
              <p className="text-primary-text leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid lg:grid-cols-2 gap-8"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-bold text-primary-text">
                  Project Context
                </h3>
                <p className="text-primary-text leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-bold text-primary-text">
                  Problem Statement
                </h3>
                <p className="text-primary-text leading-relaxed">
                  {project.challenge || "Pending content — problem statement to be defined."}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid lg:grid-cols-2 gap-8"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-bold text-primary-text">
                  Project Objectives
                </h3>
                <p className="text-primary-text leading-relaxed">
                  Deliver a robust, maintainable solution that addresses the
                  identified operational challenges while following enterprise
                  software engineering best practices.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-bold text-primary-text">
                  My Role
                </h3>
                <p className="text-primary-text leading-relaxed">
                  {project.role || "Pending content — role to be defined."}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-heading font-bold text-primary-text">
                Responsibilities
              </h3>
              <ul className="list-disc list-inside space-y-2 text-primary-text leading-relaxed">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-heading font-bold text-primary-text">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-heading font-bold text-primary-text">
                Main Features
              </h3>
              <ul className="list-disc list-inside space-y-2 text-primary-text leading-relaxed">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </motion.div>

            <Separator />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-heading font-bold text-primary-text">
                Results and Outcomes
              </h3>
              <p className="text-primary-text leading-relaxed">
                {project.outcome || "Pending content — outcomes to be defined."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-heading font-bold text-primary-text">
                Lessons Learned
              </h3>
              <p className="text-primary-text leading-relaxed">
                Pending content — lessons learned to be documented.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-heading font-bold text-primary-text">
                Related Projects
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {PROJECTS.filter((p) => p.id !== project.id)
                  .slice(0, 3)
                  .map((related) => (
                    <Link
                      key={related.id}
                      href={`/projects/${related.slug}`}
                      className="p-4 rounded-xl border border-border bg-surface hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <ArrowRight className="h-3.5 w-3.5 text-secondary-text group-hover:text-primary transition-colors" />
                        <span className="text-sm font-medium text-primary-text group-hover:text-primary transition-colors">
                          {related.name}
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
