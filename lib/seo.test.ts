import { describe, it, expect, afterEach, vi } from "vitest";
import { siteJsonLd, SITE_URL } from "./seo";
import { BRAND } from "./site";
import sitemap from "../app/sitemap";
import robots from "../app/robots";

describe("siteJsonLd", () => {
  const ld = siteJsonLd() as Record<string, unknown>;
  it("has no phone and no address until Haydee confirms them", () => {
    expect(ld).not.toHaveProperty("telephone");
    expect(ld).not.toHaveProperty("address");
    expect(JSON.stringify(ld)).not.toMatch(/\d{7,}/);
  });
  it("links exactly her two profiles", () => {
    expect(ld.sameAs).toEqual([BRAND.instagram, BRAND.facebook]);
  });
  it("is an Organization at the site URL", () => {
    expect(ld["@type"]).toBe("Organization");
    expect(ld.url).toBe("https://haydeecallejas.com/");
  });
});

describe("sitemap", () => {
  it("lists only the home page", () => {
    const s = sitemap();
    expect(s).toHaveLength(1);
    expect(s[0].url).toBe("https://haydeecallejas.com/");
    expect(SITE_URL).toBe("https://haydeecallejas.com");
  });
});

describe("robots", () => {
  afterEach(() => vi.unstubAllEnvs());
  it("blocks everything on preview deploys", () => {
    vi.stubEnv("VERCEL_ENV", "preview");
    expect(robots().rules).toEqual({ userAgent: "*", disallow: "/" });
  });
  it("allows all and names the sitemap in production", () => {
    vi.stubEnv("VERCEL_ENV", "production");
    const r = robots();
    expect(r.rules).toEqual({ userAgent: "*", allow: "/" });
    expect(r.sitemap).toBe("https://haydeecallejas.com/sitemap.xml");
  });
});
