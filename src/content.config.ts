import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";
import slugify from "slugify";

const posts = defineCollection({
  loader: glob({ base: "src/content/posts", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z
      .object({
        author: reference("profiles").default("default"),
        category: z.string().default("Uncategorised"),
        description: z.string(),
        draft: z.boolean().default(false),
        slug: z.string().optional(),
        image: z
          .object({
            src: image(),
            alt: z.string().nullable().default(null),
          })
          .optional(),
        imageAttribution: z
          .object({
            name: z.string().optional(),
            url: z.string().url().optional(),
          })
          .optional(),
        pubDate: z.coerce.date(),
        tags: z.array(z.string()).default([]),
        title: z.string(),
        updatedDate: z.coerce.date().optional(),
      })
      .refine((data) => {
        if (!data.slug) {
          data.slug = slugify(data.title, { lower: true });
        }
        return true;
      }),
});

const profiles = defineCollection({
  loader: glob({ base: "src/content/profiles", pattern: "**/*.yaml" }),
  schema: ({ image }) =>
    z.object({
      category: z.string().default("Uncategorised"),
      description: z.string(),
      draft: z.boolean().default(false),
      image: z
        .object({
          src: image(),
          alt: z.string().nullable().default(null),
        })
        .optional(),
      pubDate: z.coerce.date(),
      slug: z.string().optional(),
      tags: z.array(z.string()).default([]),
      title: z.string(),
      updatedDate: z.coerce.date().optional(),
    }),
});

export const collections = { posts, profiles };
