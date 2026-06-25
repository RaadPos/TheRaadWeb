import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import DocArticleBody from "@/components/DocArticleBody";
import { DOCS, getDoc } from "@/lib/docs";

const SITE = "https://raadapp.com";

export function generateStaticParams() {
  return DOCS.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const doc = getDoc(params.slug);
  if (!doc) return { title: "Documentation, Raad POS" };
  const url = `/docs/${doc.slug}`;
  return {
    title: `${doc.title}, Raad POS Docs`,
    description: doc.description,
    keywords: doc.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${doc.title}, Raad POS Docs`,
      description: doc.description,
      url,
      type: "article",
      siteName: "Raad POS",
    },
    twitter: {
      card: "summary",
      title: `${doc.title}, Raad POS Docs`,
      description: doc.description,
    },
  };
}

export default function DocArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const doc = getDoc(params.slug);
  if (!doc) notFound();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: doc.title,
      description: doc.description,
      keywords: doc.keywords.join(", "),
      articleSection: doc.category,
      inLanguage: "en",
      publisher: { "@type": "Organization", name: "Raad POS", url: SITE },
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}/docs/${doc.slug}` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Documentation", item: `${SITE}/docs` },
        { "@type": "ListItem", position: 2, name: doc.category, item: `${SITE}/docs` },
        { "@type": "ListItem", position: 3, name: doc.title, item: `${SITE}/docs/${doc.slug}` },
      ],
    },
  ];

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DocArticleBody slug={params.slug} />
    </PageShell>
  );
}
