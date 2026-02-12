const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
  eleventyConfig.addDataExtension("yml,yaml", contents => yaml.load(contents));
  eleventyConfig.addPassthroughCopy("content");

  return {
    dir: {
      input: ".",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["html", "njk"],
    htmlTemplateEngine: "njk"
  };
};
