const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "src",
        aliases: {
          "@common": "./common",
          "@components": "./components",
          "@scenes": "./scenes",
          "@images": "./assets/images",
          "@icons": "./assets/icons",
          "@utils": "./utils",
          "@localisations": "./localisations"
        }
      }
    }
  ]
};