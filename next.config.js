const path = require("path");
const markdownIt = require('markdown-it');
const markdownItPrism = require('markdown-it-prism');
const markdownItEmoji = require('markdown-it-emoji');

module.exports = {
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": path.resolve(__dirname, "./")
    };
    config.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: {
        breaks: true,
        markdownIt: markdownIt({ html: true }).use(markdownItPrism).use(markdownItEmoji)
      }
    });
    return config;
  }
};
