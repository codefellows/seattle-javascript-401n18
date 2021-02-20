const withSass = require('@zeit/next-sass');

module.exports = withSass({
  webpack(config, options) {
    config.node = { fs: 'empty' };
    return config;
  },
});
