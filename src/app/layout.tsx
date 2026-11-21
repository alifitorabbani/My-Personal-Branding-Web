import type { Metadata, Viewport } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { PageTransition } from "@/components/layout/page-transition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Alifito Rabbani Cahyono",
    default: "Alifito Rabbani Cahyono — Software Engineer & AI/ML Enthusiast",
  },
  description:
    "Building intelligent software systems, scalable backend solutions, and meaningful digital experiences. Software Engineer & AI/ML Enthusiast.",
  keywords: [
    "Alifito Rabbani Cahyono",
    "Software Engineer",
    "AI/ML",
    "Full-Stack Developer",
    "Backend Engineer",
    "Personal Branding",
    "Portfolio",
  ],
  authors: [{ name: "Alifito Rabbani Cahyono" }],
  openGraph: {
    type: "website",
    locale: "en_ID",
    siteName: "Alifito Rabbani Cahyono",
    title: "Alifito Rabbani Cahyono — Software Engineer & AI/ML Enthusiast",
    description:
      "Building intelligent software systems, scalable backend solutions, and meaningful digital experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alifito Rabbani Cahyono — Software Engineer & AI/ML Enthusiast",
    description:
      "Building intelligent software systems, scalable backend solutions, and meaningful digital experiences.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geist.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
