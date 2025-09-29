import type { CollectionEntry } from "astro:content";

export function createSchema(
  url: URL,
  post: CollectionEntry<"posts">,
  profile: CollectionEntry<"profiles">,
) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.data.title,
    description: post.data.description,
    datePublished: post.data.pubDate.toISOString(),
    dateModified: post.data.updatedDate?.toISOString() ?? undefined,
    url: url,
    thumbnailUrl: post.data.image?.src.src,
    image: {
      "@type": "ImageObject",
      url: post.data.image?.src.src,
      width: post.data.image?.src.width,
      height: post.data.image?.src.height,
      caption: post.data.image?.alt,
    },
    author: {
      "@type": "Person",
      name: profile.data?.title ?? undefined,
      description: profile.data?.description ?? undefined,
    },
  };

  return schema;
}

export default { createSchema };
