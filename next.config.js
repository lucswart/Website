// next.config.js
const withImages = require("next-images");
module.exports = withImages();

const sitemap = require("nextjs-sitemap-generator");

sitemap({
  baseUrl: "https://byte24.nl",
  pagesDirectory: `${__dirname}/pages`,
  targetDirectory: "public/",
});
