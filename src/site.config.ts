export const generalConfig = {
  name: "astro-skeleton",
  short_name: "astro-skeleton",
  title_separator: "-",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquam.",
  footer_description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquam.",
  footer_copyright: "2025 (c) - Lorem ipsum dolor sit amet, consectetur adipiscing.",
  language: "en-GB",
  date_format: "j F Y",
};

export const measurementConfig = {
  partytown: false,
  baidu_verification: "",
  bing_verificaton: "",
  facebook_verification: "",
  google_ga4_id: "",
  google_gtm_id: "",
  google_verification: "",
  fathom_id: "",
  metrical_id: "",
  pinterest_verification: "",
  umami_id: "",
  umami_source: "",
  yandex_verification: "",
};

export const collectionsConfig = {
  posts_per_page: 9,
  permalink_posts: "collections/posts",
  permalink_posts_entry: "collections/posts/entry/",
  permalink_posts_category: "collections/posts/category/",
  permalink_posts_tag: "collections/posts/tag/",
  profiles_per_page: 6,
  permalink_profiles: "collections/profiles",
  permalink_profiles_entry: "collections/profiles/entry/",
  permalink_profiles_category: "collections/profiles/category/",
  permalink_profiles_tag: "collections/profiles/tag/",
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
    id: "components",
    parentId: null,
    url: null,
    label: "Components",
  },
  {
    id: "banners",
    parentId: "components",
    url: "/astro-skeleton/components/banners",
    label: "Banners",
  },
  {
    id: "cards",
    parentId: "components",
    url: null,
    label: "Cards",
  },
  {
    id: "feature-cards",
    parentId: "cards",
    url: "/astro-skeleton/components/cards/feature",
    label: "Features",
  },
  {
    id: "quote-cards",
    parentId: "cards",
    url: "/astro-skeleton/components/cards/quote",
    label: "Quotes",
  },
  {
    id: "simple-cards",
    parentId: "cards",
    url: "/astro-skeleton/components/cards/simple",
    label: "Simple",
  },
  {
    id: "simple-icon-cards",
    parentId: "cards",
    url: "/astro-skeleton/components/cards/simple-icon",
    label: "Simple Icons",
  },
  {
    id: "statistic-cards",
    parentId: "cards",
    url: "/astro-skeleton/components/cards/statistic",
    label: "Statistics",
  },
  {
    id: "heroes",
    parentId: "components",
    url: "/astro-skeleton/components/heroes",
    label: "Heroes",
  },
  {
    id: "interactive",
    parentId: "components",
    url: null,
    label: "Interactive",
  },
  {
    id: "leaflet-map",
    parentId: "interactive",
    url: "/astro-skeleton/components/interactive/leaflet-map",
    label: "Leaflet Map",
  },
  {
    id: "web3-form",
    parentId: "interactive",
    url: "/astro-skeleton/components/interactive/web3-form",
    label: "Web3 Form",
  },
  {
    id: "media",
    parentId: "components",
    url: null,
    label: "Media",
  },
  {
    id: "gallery-carousel",
    parentId: "media",
    url: "/astro-skeleton/components/media/gallery-carousel",
    label: "Gallery Carousel",
  },
  {
    id: "vimeo-embed",
    parentId: "media",
    url: "/astro-skeleton/components/media/vimeo-embed",
    label: "Vimeo Embed",
  },
  {
    id: "youtube=embed",
    parentId: "media",
    url: "/astro-skeleton/components/media/youtube-embed",
    label: "YouTube Embed",
  },
  {
    id: "ui",
    parentId: "components",
    url: "/astro-skeleton/components/ui",
    label: "UI",
  },
  {
    id: "sample-pages",
    parentId: null,
    url: null,
    label: "Sample Pages",
  },
  {
    id: "sample-page-1",
    parentId: "sample-pages",
    url: "/astro-skeleton/sample-pages/sample-page-1",
    label: "Sample Page 1",
  },
  {
    id: "sample-page-2",
    parentId: "sample-pages",
    url: "/astro-skeleton/sample-pages/sample-page-2",
    label: "Sample Page 2",
  },
  {
    id: "sample-page-3",
    parentId: "sample-pages",
    url: "/astro-skeleton/sample-pages/sample-page-3",
    label: "Sample Page 3",
  },
  {
    id: "sample-page-4",
    parentId: "sample-pages",
    url: "/astro-skeleton/sample-pages/sample-page-4",
    label: "Sample Page 4",
  },
];

export const footerNavigation = [
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
    id: "locations",
    parentId: "collections",
    url: "/astro-skeleton/collections/locations",
    label: "Locations",
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
  {
    id: "faqs",
    parentId: "sample-pages",
    url: "/astro-skeleton/sample-pages/faqs",
    label: "FAQs",
  },
];
