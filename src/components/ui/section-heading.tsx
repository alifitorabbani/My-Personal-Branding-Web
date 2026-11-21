"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  heading: string;
  subheading?: string;
  className?: string;
}

export function SectionHeading({ heading, subheading, className }: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      {subheading && (
        <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-primary-text">
          {subheading}
        </h2>
      )}
      {heading && (
        <p className="mt-4 text-lg text-secondary-text">
          {heading}
        </p>
      )}
    </div>
  );
}
