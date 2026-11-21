"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Download, Clock, MapPin, FileCheck, PenTool } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PERSON, EXPERIENCE, PROJECTS, SKILL_GROUPS, ACHIEVEMENTS } from "@/data";

export default function Resume() {
  const [reviewOpen, setReviewOpen] = React.useState(false);

  const professionalExp = EXPERIENCE.filter((e) => e.type === "professional");
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <main className="flex-1">
        <section className="pt-20 pb-24">
          <div className="container mx-auto px-4">
            <SectionHeading
              subheading="Resume"
              heading="Professional CV and experience summary."
            />
            <p className="mt-6 text-lg text-secondary-text leading-relaxed max-w-2xl mx-auto text-center">
              Download my resume for a complete overview of professional
              experience, education, and technical skills.
            </p>
          </div>
        </section>

        <section className="py-24 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto rounded-xl border border-border bg-card p-8 md:p-12 shadow-lg">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-heading font-bold tracking-tight text-primary-text">
                    Alifito Rabbani Cahyono
                  </h2>
                  <p className="text-lg text-secondary-text mt-1">
                    Software Engineer &amp; AI/ML Enthusiast
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-secondary-text">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    Last updated: November 2026
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => {
                    window.open(
                      "/resume/alifito-rabbani-cahyono.docx",
                      "_blank",
                    );
                  }}
                >
                  <Download className="h-5 w-5 mr-2" /> Download CV
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setReviewOpen(true)}
                >
                  <FileCheck className="h-4 w-4 mr-2" /> Review CV
                </Button>
              </div>

              <div id="preview" className="mt-8 border border-border bg-surface rounded-lg overflow-hidden">
                <div className="p-6 border-b border-border font-mono text-sm text-secondary-text">
                  Resume preview — print-friendly layout available via browser
                  print (Cmd+P / Ctrl+P).
                </div>
                <div className="p-6 font-mono text-sm text-primary-text leading-relaxed">
                  {PERSON.name}<br />
                  {PERSON.title}<br />
                  {PERSON.location} &bull; {PERSON.email}<br /><br />
                  {PERSON.summary}<br /><br />
                  <span className="font-bold">Experience:</span><br />
                  <div className="mt-2 space-y-1 ml-4">
                    {professionalExp.map((e) => (
                      <div key={e.id} className="text-left">
                        • <span className="text-primary-text font-medium">{e.position}</span>{" "}
                        at {e.company} (
                        <span className="text-xs font-mono text-secondary-text">
                          {e.startDate.slice(0, 4)} –{" "}
                          {e.endDate ? e.endDate.slice(0, 4) : "Present"}
                        </span>
                        )
                      </div>
                    ))}
                  </div>
                  <span className="font-bold">Featured Projects:</span><br />
                  <div className="mt-2 space-y-1 ml-4">
                    {featuredProjects.map((p) => (
                      <div key={p.id} className="text-left">
                        • <span className="text-primary-text font-medium">{p.name}</span>{" "}
                        — {p.shortDescription}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {reviewOpen && (
        <div className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-elevated border border-border rounded-2xl p-8 md:p-12 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-heading font-bold text-primary-text">
                CV Review — Auto-Generated
              </h3>
              <Button variant="outline" size="sm" onClick={() => setReviewOpen(false)}>
                <PenTool className="h-4 w-4 mr-2" /> Close
              </Button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-heading font-semibold text-primary-text mb-3">
                  Profile Summary
                </h4>
                <p className="text-secondary-text leading-relaxed">
                  {PERSON.summary} Currently a seventh-semester Informatics
                  student at Telkom University with professional experience
                  spanning backend engineering, full-stack development, and
                  AI/ML.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-heading font-semibold text-primary-text mb-3">
                    Professional Experience
                  </h4>
                  <ul className="list-disc list-inside text-secondary-text space-y-2">
                    {professionalExp.map((e) => (
                      <li key={e.id}>
                        <span className="text-primary-text font-medium">{e.position}</span>{" "}
                        at {e.company}{" "}
                        <span className="text-xs font-mono text-secondary-text ml-2">
                          ({e.startDate.slice(0, 4)} –{" "}
                          {e.endDate ? e.endDate.slice(0, 4) : "Present"})
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-primary-text mb-3">
                    Technical Skills
                  </h4>
                  <ul className="list-disc list-inside text-secondary-text space-y-2">
                    {SKILL_GROUPS.map((g) => (
                      <li key={g.id}>
                        <span className="text-primary-text font-medium">{g.name}:</span>{" "}
                        {g.skills.slice(0, 4).join(", ")}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-heading font-semibold text-primary-text mb-3">
                  Key Projects
                </h4>
                <ul className="list-disc list-inside text-secondary-text space-y-2">
                  {featuredProjects.map((p) => (
                    <li key={p.id}>
                      <span className="text-primary-text font-medium">{p.name}</span>{" "}
                      — {p.shortDescription}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-secondary-text italic">
                  This review is auto-generated from the data on this portfolio
                  website. Download your CV using the Download CV button above.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
