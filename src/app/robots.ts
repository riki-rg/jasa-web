import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard/", "/api/", "/auth/", "/_next/", "/static/"],
    },
    sitemap: "https://jasawebcoding.com/sitemap.xml",
    host: "https://jasawebcoding.com",
  };
}