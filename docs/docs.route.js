const router = require("express").Router();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const definition = require("./docs.definition");

const swaggerSpec = swaggerJsdoc({
  definition,
  apis: [
    // "./definitions/list.swagger.yaml",
  ],
});

router.use(
  "/",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, { explorer: true })
);

module.exports = router;
