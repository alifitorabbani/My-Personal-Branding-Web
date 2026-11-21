"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Trophy, Calendar, Briefcase } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ORGANIZATIONAL_EXPERIENCE, COMMITTEE_EXPERIENCE } from "@/data";

export default function Leadership() {
  const orgItems = ORGANIZATIONAL_EXPERIENCE.filter(
    (i) => i.type === "organizational"
  );
  const eventItems = COMMITTEE_EXPERIENCE.filter((i) => i.type === "event");

  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <main className="flex-1">
        <section className="pt-20 pb-24">
          <div className="container mx-auto px-4">
            <SectionHeading
              subheading="Leadership"
              heading="Organizational capabilities that strengthen engineering impact."
            />
            <p className="mt-6 text-lg text-secondary-text leading-relaxed max-w-2xl">
              Leadership is presented as a professional capability that complements
              technical excellence — coordinating people, managing projects, and
              executing organizational initiatives.
            </p>
          </div>
        </section>

        <section className="py-24 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 mb-12">
              <Badge variant="outline" className="cursor-pointer hover:border-primary/50 transition-colors">
                Organizational
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:border-primary/50 transition-colors">
                Strategic Management
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:border-primary/50 transition-colors">
                Human Resources
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:border-primary/50 transition-colors">
                Event Management
              </Badge>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {orgItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  <Card className="overflow-hidden hover:border-primary/50 transition-border">
                    <CardHeader className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {item.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-base">{item.position}</CardTitle>
                      <p className="text-xs text-secondary-text">
                        {item.organization}
                      </p>
                      <p className="text-xs font-mono text-secondary-text mt-1">
                        {item.startDate.slice(0, 4)} –
                        {item.endDate ? item.endDate.slice(0, 4) : "Present"}
                      </p>
                    </CardHeader>
                    <CardContent className="p-5 pb-3">
                      <p className="text-sm text-primary-text leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {item.responsibilities.slice(0, 3).map((r) => (
                          <Badge key={r} variant="secondary" className="text-xs">
                            {r}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface/50">
          <div className="container mx-auto px-4">
            <SectionHeading
              subheading="Committee & Event Experience"
              heading="Selected initiatives and event leadership."
            />
            <div className="mt-12 grid md:grid-cols-3 gap-4">
              {eventItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="p-6 rounded-xl border border-border bg-surface text-center"
                >
                  <div className="text-xl mb-2">
                    {item.type === "event" ? "📅" : "🤝"}
                  </div>
                  <p className="text-sm font-semibold text-primary-text">
                    {item.position}
                  </p>
                  <p className="text-xs text-secondary-text">
                    {item.organization}
                  </p>
                  <p className="text-xs text-secondary-text mt-1">
                    {item.startDate.slice(0, 4)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
