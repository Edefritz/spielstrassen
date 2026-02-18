module.exports = function(eleventyConfig) {
  // Copy static assets to output
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/map.js");
  eleventyConfig.addPassthroughCopy("src/spielstrasse.ics");
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    pathPrefix: process.env.ELEVENTY_PATH_PREFIX || "/",
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
