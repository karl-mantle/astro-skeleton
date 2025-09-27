import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import prettier from "eslint-plugin-prettier";

const tsParser = tseslint.parser;
const astroParser = astro.parser;

export default defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  js.configs.recommended,
  tseslint.configs.recommended,

  {
    plugins: {
      prettier: prettier,
    },
    rules: {
      "prettier/prettier": "off",
    },
  },

  astro.configs.recommended,
  astro.configs["jsx-a11y-recommended"],

  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".astro"],
        sourceType: "module",
        ecmaVersion: "latest",
        project: "./tsconfig.json",
      },
    },
    rules: {
      // ? add rules
    },
  },

  {
    ignores: ["dist/**", "**/*.d.ts", ".github/"],
  },
]);
