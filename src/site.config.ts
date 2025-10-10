export const siteSettings = {
  title: "astro-skeleton",
  title_separator: "-",
  short_title: "astro-skeleton",
  language: "en-GB",
  date_format: "j F Y",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquam.",
  footer_text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  url: "https://karl-mantle.github.io", // "http://127.0.0.1:4321", "https://karl-mantle.github.io/astro-skeleton",
};

export const collectionSettings = {
  posts_per_page: 9,
  permalink_posts: "/astro-skeleton/collections/posts",
  permalink_posts_entry: "/astro-skeleton/collections/posts/entry/",
  permalink_posts_category: "/astro-skeleton/collections/posts/category/",
  permalink_posts_tag: "/astro-skeleton/collections/posts/tag/",
  profiles_per_page: 6,
  permalink_profiles: "/astro-skeleton/collections/profiles",
  permalink_profiles_entry: "/astro-skeleton/collections/profiles/entry/",
  permalink_profiles_category: "/astro-skeleton/collections/profiles/category/",
  permalink_profiles_tag: "/astro-skeleton/collections/profiles/tag/",
};

export const socialLinks = [
  {
    href: "https://www.karlmantle.com",
    icon: "material-symbols:globe-uk-sharp",
    label: "Visit my website",
    show: true,
  },
  {
    href: "https://github.com/karl-mantle/astro-cf-blog/",
    icon: "simple-icons:github",
    label: "Visit the GitHub repo",
    show: true,
  },
  {
    href: "/astro-skeleton/rss.xml",
    icon: "material-symbols:rss-feed",
    label: "Subscribe to RSS feed",
    show: true,
  },
];

export const headerNavigation = [
  {
    id: "collections",
    parentId: null,
    url: "/astro-skeleton/collections",
    label: "Collections",
  },
  {
    id: "posts",
    parentId: "collections",
    url: "/astro-skeleton/collections/posts",
    label: "Posts",
  },
  {
    id: "profiles",
    parentId: "collections",
    url: "/astro-skeleton/collections/profiles",
    label: "Profiles",
  },
  {
    id: "components",
    parentId: null,
    url: "/astro-skeleton/components",
    label: "Components",
  },
  {
    id: "gallery",
    parentId: "components",
    url: "/astro-skeleton/components/gallery",
    label: "Gallery",
  },
  {
    id: "sample-pages",
    parentId: null,
    url: null,
    label: "Sample Pages",
  },
  {
    id: "contact-us",
    parentId: "sample-pages",
    url: "/astro-skeleton/sample-pages/contact-us",
    label: "Contact us",
  },
];
