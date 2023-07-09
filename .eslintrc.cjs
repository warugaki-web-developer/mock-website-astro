module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [],
  overrides: [
    {
      files: ['*.js', '*.mjs', '*.cjs'],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      extends: ['airbnb-base', 'prettier'],
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
    {
      files: ['*.ts', '*.mts', '*.cts'],
      plugins: ['@typescript-eslint'],

      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
        ecmaVersion: 'latest',
        sourceType: 'module',
      },

      extends: [
        'airbnb-base',
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
        'prettier',
      ],

      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',

        'max-lines': [
          'warn',
          { max: 150, skipComments: true, skipBlankLines: true },
        ],

        'react/jsx-filename-extension': 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
      },
    },
    {
      files: ['*.astro'],
      plugins: ['astro'],
      env: {
        // Enables global variables available in Astro components.
        node: true,
        'astro/astro': true,
        es2021: true,
      },
      parser: 'astro-eslint-parser',
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
};
