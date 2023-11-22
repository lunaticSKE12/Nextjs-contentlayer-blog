/* This code is exporting an object with two properties: `siteUrl` and `generateRobotsTxt`. */

const siteMetadata = require('./src/utils/siteMetaData');

module.exports = {
  siteUrl: siteMetadata.siteUrl,
  generateRobotsTxt: true,
};
