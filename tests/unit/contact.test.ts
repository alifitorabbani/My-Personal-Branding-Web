import { describe, it, expect } from "vitest";
import { contactSchema } from "@/lib/validation/contact";
import { rateLimit } from "@/lib/security/rate-limit";

describe("contact schema validation", () => {
  it("accepts a valid contact submission", () => {
    const result = contactSchema.safeParse({
      name: "Alifito Rabbani Cahyono",
      email: "contact@alifitorabbani.dev",
      subject: "Collaboration opportunity",
      message: "This is a message with enough length to pass validation.",
    });
    expect(result.success).toBe(true);
  });

  it("rejects a name shorter than 2 characters", () => {
    const result = contactSchema.safeParse({
      name: "A",
      email: "contact@alifitorabbani.dev",
      subject: "Hi",
      message: "This is a message with enough length.",
    });
    expect(result.success).toBe(false);
  });

  it("rejects an invalid email", () => {
    const result = contactSchema.safeParse({
      name: "Alifito",
      email: "not-an-email",
      subject: "Hi",
      message: "This is a message with enough length.",
    });
    expect(result.success).toBe(false);
  });

  it("rejects a message shorter than 10 characters", () => {
    const result = contactSchema.safeParse({
      name: "Alifito",
      email: "contact@alifitorabbani.dev",
      subject: "Hi",
      message: "short",
    });
    expect(result.success).toBe(false);
  });
});

describe("rate limiter", () => {
  it("allows requests under the limit", () => {
    const result = rateLimit("test-key-1", { max: 3, windowMs: 60000 });
    expect(result.allowed).toBe(true);
    expect(result.remaining).toBe(2);
  });

  it("blocks requests over the limit", () => {
    rateLimit("test-key-2", { max: 2, windowMs: 60000 });
    rateLimit("test-key-2", { max: 2, windowMs: 60000 });
    const result = rateLimit("test-key-2", { max: 2, windowMs: 60000 });
    expect(result.allowed).toBe(false);
    expect(result.remaining).toBe(0);
  });

  it("tracks different keys independently", () => {
    const a = rateLimit("key-a", { max: 1, windowMs: 60000 });
    const b = rateLimit("key-b", { max: 1, windowMs: 60000 });
    expect(a.allowed).toBe(true);
    expect(b.allowed).toBe(true);
  });
});
