import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TeamFlow API",
      version: "1.0.0",
    },
  },
  //   apis: ["./src/modules/**/*.js"],
  apis: ["./src/modules/**/*.route.js"],
};

export const swaggerSpec = swaggerJSDoc(options);
export const swaggerUiMiddleware = swaggerUi;
