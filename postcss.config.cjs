/* eslint-disable import/no-extraneous-dependencies */
const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');

module.exports = {
  plugins: [postcssNested, autoprefixer()],
};
