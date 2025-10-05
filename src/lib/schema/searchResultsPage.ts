import type { DataEntryMap } from "astro:content";

export function createSearchResultPage(url: URL, entry: DataEntryMap[keyof DataEntryMap][string]) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SearchResultsPage",
    name: entry.data.title,
    url: url,
  };

  return schema;
}

export default { createSearchResultPage };
