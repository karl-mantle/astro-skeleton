// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // site: "http://127.0.0.1:4321/",
  site: "https://karl-mantle.github.io/",
  base: "/astro-skeleton/",
  integrations: [
    icon({
      iconDir: "src/assets/icons",
      // TODO: add used icons here https://www.astroicon.dev/reference/configuration
    }),
    mdx(),
    robotsTxt({
      policy: [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
    }),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
