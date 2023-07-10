/** @type {import("stylelint").Config} */
module.exports = {
  extends: [
    'stylelint-config-html',
    'stylelint-config-html/astro',
    'stylelint-config-standard',
    'stylelint-rscss/config',
    'stylelint-config-recess-order',
  ],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
};
