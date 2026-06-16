import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://raadapp.com/sitemap.xml",
    host: "https://raadapp.com",
  };
}
