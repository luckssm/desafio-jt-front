const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalRunAllSpecs: true,
    baseUrl: "http://localhost:3000",
    env: {
      baseUrl: "http://localhost:3000",
      baseTestAPIUrl: "http://127.0.0.1:4000/api/graphql",
    },
  },
});
