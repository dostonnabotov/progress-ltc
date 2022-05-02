module.exports = function (eleventyConfig) {
  const { DateTime } = require("luxon");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addPassthroughCopy("./src/css/style.css");
  eleventyConfig.addPassthroughCopy("./src/index.js");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
