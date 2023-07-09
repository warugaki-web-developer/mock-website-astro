/** @type {import("@types/prettier").Options} */

module.exports = {
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      semi: true,
      options: {
        parser: 'astro',
        printWidth: 80,
        singleAttributePerLine: true,
      },
    },
  ],
};
