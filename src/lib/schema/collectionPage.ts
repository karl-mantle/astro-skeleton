import type { DataEntryMap } from "astro:content";

export function createCollectionPage(url: URL, entry: DataEntryMap[keyof DataEntryMap][string]) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: entry.data.title,
    url: url,
  };

  return schema;
}

export default { createCollectionPage };
