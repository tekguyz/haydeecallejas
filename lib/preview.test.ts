import { describe, it, expect } from "vitest";
import { metadata } from "../app/preview/page";
import sitemap from "../app/sitemap";

// The full site waits at /preview until Haydee says go: never indexed, never in the sitemap.
describe("/preview", () => {
  it("tells search engines not to index or follow it", () => {
    expect(metadata.robots).toEqual({ index: false, follow: false });
  });
  it("is not in the sitemap", () => {
    expect(sitemap().map((s) => s.url).some((u) => u.includes("/preview"))).toBe(false);
  });
});
