"use client";

import { motion } from "framer-motion";
import { Search, Filter, ArrowRight } from "lucide-react";
import React from "react";
import { Container } from "@/components/layout/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input, Label } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import { PROJECTS } from "@/data";

const CATEGORIES = [
  "All",
  "Enterprise Software",
  "Backend Engineering",
  "Full-Stack Development",
  "Artificial Intelligence",
  "Machine Learning",
  "Data Engineering",
  "Algorithm Engineering",
];

export default function Projects() {
  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState("All");

  const filtered = PROJECTS.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <main className="flex-1">
        <section className="pt-20 pb-12">
          <div className="container mx-auto px-4">
            <SectionHeading
              subheading="Projects"
              heading="Engineering case studies demonstrating technical excellence."
            />
            <div className="mt-10 flex flex-col lg:flex-row gap-6 items-start lg:items-center">
              <div className="flex w-full lg:w-auto items-center">
                <Label htmlFor="search" className="sr-only">
                  Search projects
                </Label>
                <div className="relative w-full lg:w-72">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="search"
                    placeholder="Search projects..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="relative w-full lg:w-64">
                <Label htmlFor="category" className="sr-only">
                  Filter by category
                </Label>
                <Select
                  onValueChange={setCategory}
                  defaultValue="All"
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <p className="text-sm text-secondary-text">
                {filtered.length} project{filtered.length !== 1 ? "s" : ""} found
              </p>
            </div>
          </div>
        </section>

        <section className="pb-32">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <Link key={project.id} href={`/projects/${project.slug}`} className="block">
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -6 }}
                    className="group relative"
                  >
                    <Card className="overflow-hidden hover:border-primary/50 transition-border cursor-pointer">
                      <div className="h-48 bg-elevated rounded-t-xl overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center text-secondary-text">
                          <ArrowRight className="h-8 w-8 opacity-20" />
                        </div>
                      </div>
                      <CardHeader className="p-5">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="text-xs">
                            {project.category}
                          </Badge>
                          <span className="text-xs font-mono text-secondary-text">
                            {project.status}
                          </span>
                        </div>
                        <CardTitle className="text-base">
                          {project.name}
                        </CardTitle>
                        <p className="text-xs text-secondary-text mt-1 line-clamp-2">
                          {project.shortDescription}
                        </p>
                      </CardHeader>
                      <CardContent className="p-5">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 5).map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center text-sm font-medium text-primary">
                          Read case study <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              ))}
              {filtered.length === 0 && (
                <div className="col-span-3 flex flex-col items-center justify-center py-20 text-center">
                  <p className="text-secondary-text">No projects found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
