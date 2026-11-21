"use client";

import * as React from "react";

export function CurrentYear() {
  const [year, setYear] = React.useState<number | null>(null);
  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  if (!year) return null;
  return <span>{year}</span>;
}
