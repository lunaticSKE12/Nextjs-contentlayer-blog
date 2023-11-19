/* This code is exporting an object with two properties: `siteUrl` and `generateRobotsTxt`. */
const siteMetadata = require('./project files/siteMetaData');

module.exports = {
  siteUrl: siteMetadata.siteUrl,
  generateRobotsTxt: true,
};
