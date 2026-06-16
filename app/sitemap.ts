import type { MetadataRoute } from "next";
import { DOCS } from "@/lib/docs";
import { FEATURES } from "@/lib/features";

const SITE = "https://raadapp.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/features",
    "/pricing",
    "/demo",
    "/docs",
    "/hardware",
    "/hardware/thermal-printer",
    "/hardware/barcode-scanner",
    "/support",
    "/about",
    "/privacy",
    "/terms",
  ];

  const featureRoutes = FEATURES.map((f) => `/features/${f.slug}`);
  const docRoutes = DOCS.map((d) => `/docs/${d.slug}`);

  return [...staticRoutes, ...featureRoutes, ...docRoutes].map((path) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : path.split("/").length > 2 ? 0.6 : 0.8,
  }));
}
