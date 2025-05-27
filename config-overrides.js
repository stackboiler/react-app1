const path = require("path");

module.exports = {
  webpack: (config) => {
    config.output.path = path.resolve(__dirname, "build"); // Change output directory to "dist"
    return config;
  },
};