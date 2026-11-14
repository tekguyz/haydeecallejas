import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/** Search engines see only the production site; preview deploys are blocked. */
export default function robots(): MetadataRoute.Robots {
  if (process.env.VERCEL_ENV !== "production") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${SITE_URL}/sitemap.xml` };
}
