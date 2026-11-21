import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-heading font-bold text-primary-text">404</h1>
      <p className="mt-4 text-lg text-secondary-text">
        Page not found. The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 flex items-center gap-2 px-5 py-2 rounded-lg border border-border bg-surface text-sm font-medium text-secondary-text hover:border-primary/50 hover:text-primary-text transition-colors"
      >
        ← Return Home
      </Link>
    </div>
  );
}
