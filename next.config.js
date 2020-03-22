const path = require("path");

module.exports = {
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": path.resolve(__dirname, "./")
    };
    config.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader"
    });
    return config;
  }
};
