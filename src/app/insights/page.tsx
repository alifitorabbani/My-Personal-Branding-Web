"use client";

import { motion } from "framer-motion";
import { FileText, Clock, Tag, Mail, Share2 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ARTICLES } from "@/data";

export default function Insights() {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <main className="flex-1">
        <section className="pt-20 pb-24">
          <div className="container mx-auto px-4">
            <SectionHeading
              subheading="Insights"
              heading="Technical writing and professional knowledge-sharing."
            />
            <p className="mt-6 text-lg text-secondary-text leading-relaxed max-w-2xl">
              Articles on enterprise workflow architecture, backend development,
              algorithmic optimization, and software engineering lessons.
              No fabricated publication histories — only authentic technical
              writing.
            </p>
          </div>
        </section>

        <section className="pb-32">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              {ARTICLES.map((article) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -6 }}
                >
                  <Card className="overflow-hidden hover:border-primary/50 transition-border">
                    <div className="h-48 bg-elevated rounded-t-xl overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center text-secondary-text">
                        <FileText className="h-10 w-10 opacity-20" />
                      </div>
                    </div>
                    <CardHeader className="p-5">
                      <Badge variant="outline" className="text-xs mb-3">
                        {article.category}
                      </Badge>
                      <Link href={`/insights/${article.slug}`}>
                        <CardTitle className="text-base group-hover:text-primary transition-colors">
                          {article.title}
                        </CardTitle>
                      </Link>
                      <p className="text-sm text-secondary-text line-clamp-2 mt-1">
                        {article.excerpt}
                      </p>
                    </CardHeader>
                    <CardContent className="p-5 pt-3">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-xs text-secondary-text">
                        <span>
                          <Clock className="mr-1.5 h-3.5 w-3.5" />
                          {article.readingTime} min read
                        </span>
                        <span>{article.publishedAt}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
              {ARTICLES.length === 0 && (
                <div className="col-span-3 flex flex-col items-center justify-center py-20 text-center">
                  <p className="text-secondary-text">No articles available yet.</p>
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
