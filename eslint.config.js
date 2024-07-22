import eslintPluginAstro from "eslint-plugin-astro";
import typescriptEslintParser from "@typescript-eslint/parser";

const astroConfig = eslintPluginAstro.configs.recommended;

export default [
  {
    files: ["src/**/*.astro"],
    languageOptions: {
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
    rules: {
      ...astroConfig.rules,
      // Add any additional custom rules for .astro files here
    },
  },
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
    rules: {
      // Add any custom rules for .ts files here
    },
  },
];
