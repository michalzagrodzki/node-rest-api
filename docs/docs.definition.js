const { version } = require("./../package.json");
const definition = {
  openapi: "3.0.0.",
  info: {
    title: "Node Express REST API",
    version,
    description: "REST API for handling simple requests",
    license: {
      name: "MIT",
      url: "https://spdx.org/licenses/MIT.html",
    },
    contact: {
      name: "Michal Zagrodzki",
    },
  },
  servers: [
    {
      url: `http://localhost:5050/`,
      description: "Development server",
    },
  ],
};

module.exports = definition;
