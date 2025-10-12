// @ts-check
import { defineConfig } from "astro/config";
import { generalConfig } from "./src/site.config";
import favicons from "astro-favicons";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "http://127.0.0.1:4321/",
  // site: "https://karl-mantle.github.io/",
  base: "/astro-skeleton",
  integrations: [
    favicons({
      // example defaults
      name: `${generalConfig.name}`,
      name_localized: {
        "zh-CN": "Astro 骨架模板",
        ar: {
          value: "قالب هيكل Astro",
          dir: "rtl",
          lang: "ar",
        },
      },
      short_name: `${generalConfig.short_name}`,
      short_name_localized: {
        "zh-CN": "骨架模板",
        ar: "هيكل Astro",
      },
      appleStatusBarStyle: "black-translucent",
      themes: ["#000", "#fff"],
      background: "#fff",
      manifest: {
        start_url: "https://karl-mantle.github.io/astro-skeleton",
        orientation: "any",
        display: "standalone",
        display_override: ["window-controls-overlay", "minimal-ui"],
      },
      icons: {
        favicons: true,
        android: true,
        appleIcon: true,
        appleStartup: true,
        windows: true,
        yandex: true,
      },
      loadManifestWithCredentials: false,
      manifestRelativePaths: false,
      manifestMaskable: false,
      cacheBustingQueryParam: null,
      pixel_art: false,
      output: {
        images: true,
        files: true,
        html: true,
        // assetsPrefix: "/astro-skeleton/",
      },
      version: "1.0.0",
    }),
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
