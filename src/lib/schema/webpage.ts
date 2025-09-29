import type { CollectionEntry } from "astro:content";

export function createSchema(url: URL, post: CollectionEntry<"posts">) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "test",
    url: url,
  };

  return schema;
}

export default { createSchema };
