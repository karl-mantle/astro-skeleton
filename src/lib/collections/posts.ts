import { getCollection } from "astro:content";
import slugify from "slugify";

type Terms = {
  count?: number;
  name: string;
  slug: string;
  type?: string;
};

export const getPosts = async (max?: number) => {
  return (await getCollection("posts"))
    .filter((entry) => !entry.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .slice(0, max);
};

export const getPostsByCategory = async (category: string, max?: number) => {
  return (await getPosts(max))
    .filter((entry) => entry.data.category.includes(category))
    .slice(0, max);
};

export const getPostsByTag = async (tag: string, max?: number) => {
  return (await getPosts(max)).filter((entry) => entry.data.tags.includes(tag)).slice(0, max);
};

export const getPostsCategories = async (): Promise<Terms[]> => {
  const posts = await getPosts();
  const categories = new Set(posts.map((post) => post.data.category));

  const categoriesArray = Array.from(categories).map((category) => ({
    name: category,
    slug: slugify(category, { lower: true }),
    type: "category",
  }));

  return categoriesArray.sort((a, b) => a.name.localeCompare(b.name));
};

export const getPostsTags = async (): Promise<Terms[]> => {
  const posts = await getPosts();
  const tags = new Set(posts.flatMap((post) => post.data.tags));

  const tagsArray = Array.from(tags).map((tag) => ({
    name: tag,
    slug: slugify(tag, { lower: true }),
    type: "tag",
  }));

  return tagsArray.sort((a, b) => a.name.localeCompare(b.name));
};

export const getPostsTerms = async (): Promise<Terms[]> => {
  const postsCategories = await getPostsCategories();
  const postsTags = await getPostsTags();
  const postsTermsArray = postsCategories.concat(postsTags);

  return postsTermsArray.sort((a, b) => a.name.localeCompare(b.name));
};

export const getPostsTagsCount = async (): Promise<Terms[]> => {
  const posts = await getPosts();
  const postsTagList: { name: string; count: number }[] = [];

  posts.forEach((post) => {
    post.data.tags.forEach((tag: string) => {
      const existing = postsTagList.find((t) => t.name === tag);
      if (existing) {
        existing.count += 1;
      } else {
        postsTagList.push({ name: tag, count: 1 });
      }
    });
  });

  const postsTagsArray = postsTagList.map((tag) => ({
    name: tag.name,
    slug: slugify(tag.name, { lower: true }),
    count: tag.count,
  }));

  return postsTagsArray.sort((a, b) => a.name.localeCompare(b.name));
};
