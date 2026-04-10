import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/account/"] }],
    sitemap: "https://maturit-italy.koydo.app/sitemap.xml",
    host: "https://maturit-italy.koydo.app",
  };
}
