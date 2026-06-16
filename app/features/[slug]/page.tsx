import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import FeatureDetailBody from "@/components/FeatureDetailBody";
import { FEATURES, getFeature } from "@/lib/features";

export function generateStaticParams() {
  return FEATURES.map((f) => ({ slug: f.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const f = getFeature(params.slug);
  if (!f) return { title: "Feature — Raad POS" };
  return {
    title: `${f.title} — Raad POS`,
    description: f.short,
    alternates: { canonical: `/features/${f.slug}` },
  };
}

export default function FeatureDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  if (!getFeature(params.slug)) notFound();
  return (
    <PageShell>
      <FeatureDetailBody slug={params.slug} />
    </PageShell>
  );
}
