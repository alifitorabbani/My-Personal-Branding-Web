interface RateLimiter {
  hits: number[];
  windowMs: number;
  max: number;
}

class RateLimiterStore {
  private store = new Map<string, RateLimiter>();

  consume(key: string, max: number, windowMs: number): { allowed: boolean; remaining: number; reset: number } {
    const now = Date.now();
    let entry = this.store.get(key);

    if (!entry || entry.hits.length === 0 || now - entry.hits[0] > windowMs) {
      entry = { hits: [], windowMs, max };
    }

    // Remove old hits outside the window
    entry.hits = entry.hits.filter((t) => now - t <= windowMs);

    if (entry.hits.length >= max) {
      const oldest = entry.hits[0];
      const reset = oldest + windowMs;
      return { allowed: false, remaining: 0, reset };
    }

    entry.hits.push(now);
    this.store.set(key, entry);

    return { allowed: true, remaining: max - entry.hits.length, reset: now + windowMs };
  }
}

export const rateLimiter = new RateLimiterStore();

export function rateLimit(
  key: string,
  options: { max?: number; windowMs?: number } = {}
) {
  return rateLimiter.consume(
    key,
    options.max ?? 5,
    options.windowMs ?? 60 * 1000
  );
}
