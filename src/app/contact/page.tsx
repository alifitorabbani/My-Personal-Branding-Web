"use client";

import { motion } from "framer-motion";
import { Mail, Globe, ExternalLink, Send, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PERSON } from "@/data";

export default function Contact() {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <main className="flex-1">
        <section className="pt-20 pb-24">
          <div className="container mx-auto px-4">
            <SectionHeading subheading="Contact" heading="Get in touch." />
            <p className="mt-6 text-lg text-secondary-text leading-relaxed max-w-2xl mx-auto text-center">
              I&apos;m open to conversations about engineering challenges,
              technical collaborations, and opportunities to build meaningful
              software.
            </p>
          </div>
        </section>

        <section className="pb-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-5">
                    <div className="space-y-6">
                      <a
                        href={`mailto:${PERSON.email}`}
                        className="flex items-center gap-4 p-4 rounded-lg border border-border bg-surface hover:border-primary/50 hover:bg-primary/5 transition-colors"
                      >
                        <Mail className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium text-primary-text">
                            {PERSON.email}
                          </p>
                          <p className="text-sm text-secondary-text">
                            Send email directly
                          </p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-secondary-text group-hover:text-primary transition-colors" />
                      </a>
                      <a
                        href={PERSON.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-lg border border-border bg-surface hover:border-primary/50 hover:bg-primary/5 transition-colors"
                      >
                        <Globe className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium text-primary-text">LinkedIn</p>
                          <p className="text-sm text-secondary-text">
                            Connect professionally
                          </p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-secondary-text group-hover:text-primary transition-colors" />
                      </a>
                      <a
                        href={PERSON.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-lg border border-border bg-surface hover:border-primary/50 hover:bg-primary/5 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium text-primary-text">GitHub</p>
                          <p className="text-sm text-secondary-text">
                            View source code
                          </p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-secondary-text group-hover:text-primary transition-colors" />
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader>
                    <CardTitle>Availability</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-5">
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span className="text-sm text-secondary-text">
                        Open to conversations (availability is editable and not
                        publicly confirmed)
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const name = formData.get("name") as string;
                  const email = formData.get("email") as string;
                  const subject = formData.get("subject") as string;
                  const message = formData.get("message") as string;
                  const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
                  window.location.href = `mailto:${PERSON.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <SectionHeading
                    subheading="Send a message"
                    heading="Contact Form"
                    className="mb-2"
                  />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Alifito Rabbani Cahyono"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Collaboration opportunity"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or opportunity..."
                    required
                    className="min-h-[160px]"
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
