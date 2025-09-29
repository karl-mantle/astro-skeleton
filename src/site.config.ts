export const siteSettings = {
  title: "astro-skeleton",
  title_separator: "-",
  short_title: "astro-skeleton",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquam.",
  footer_text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquam.",
  url: "https://karl-mantle.github.io/astro-skeleton", // "http://127.0.0.1:4321",
};

export const collectionSettings = {
  posts_per_page: 9,
  permalink_posts: "collections/posts",
  permalink_posts_entry: "collections/posts/entry",
  permalink_posts_category: "collections/posts/category",
  permalink_posts_tag: "collections/posts/tag",
  profiles_per_page: 6,
  permalink_profiles: "collections/profiles",
  permalink_profiles_entry: "collections/profiles/entry",
  permalink_profiles_category: "collections/profiles/category",
  permalink_profiles_tag: "collections/profiles/tag",
};

export const socialLinks = [
  {
    href: "https://www.karlmantle.com",
    icon: "material-symbols:globe-uk-sharp",
    label: `Visit my website`,
    show: true,
  },
  {
    href: "https://github.com/karl-mantle/astro-cf-blog/",
    icon: "simple-icons:github",
    label: `Visit the GitHub repo`,
    show: true,
  },
  {
    href: `${siteSettings.url}/rss.xml`,
    icon: "material-symbols:rss-feed",
    label: `Subscribe to RSS feed`,
    show: true,
  },
];

export const headerNavigation = [
  {
    id: "collections",
    parentId: null,
    url: `${siteSettings.url}/collections`,
    label: "Collections",
  },
  {
    id: "posts",
    parentId: "collections",
    url: `${siteSettings.url}/collections/posts`,
    label: "Posts",
  },
  {
    id: "profiles",
    parentId: "collections",
    url: `${siteSettings.url}/collections/profiles`,
    label: "Profiles",
  },
  {
    id: "components",
    parentId: null,
    url: `${siteSettings.url}/components`,
    label: "Components",
  },
  {
    id: "gallery",
    parentId: "components",
    url: `${siteSettings.url}/components/gallery`,
    label: "Gallery",
  },
  {
    id: "sample-pages",
    parentId: null,
    url: `${siteSettings.url}/sample-pages`,
    label: "Sample Pages",
  },
  {
    id: "contact-us",
    parentId: "sample-pages",
    url: `${siteSettings.url}/sample-pages/contact-us`,
    label: "Contact us",
  },
];
