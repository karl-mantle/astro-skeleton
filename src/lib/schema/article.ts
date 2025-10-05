import type { CollectionEntry } from "astro:content";

export async function createArticle(url: URL, entry: CollectionEntry<"posts">) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.data.title,
    description: entry.data.description,
    datePublished: entry.data.pubDate.toISOString(),
    dateModified: entry.data.updatedDate?.toISOString() ?? undefined,
    url: url.toString(),
    thumbnailUrl: entry.data.image?.src.src,
    image: {
      "@type": "ImageObject",
      url: entry.data.image?.src.src,
      width: entry.data.image?.src.width,
      height: entry.data.image?.src.height,
      caption: entry.data.image?.alt,
    },
  };

  return schema;
}

export default { createArticle };
