import eslintPluginAstro from 'eslint-plugin-astro';
export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['*.astro'],
    parser: 'astro-eslint-parser',
    parserOptions : {
        extraFileExtensions: ['.astro'],
    },
    rules: {},
  }
];