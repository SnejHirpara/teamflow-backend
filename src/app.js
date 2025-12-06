import express from "express";
import cors from "cors";

import { swaggerSpec, swaggerUiMiddleware } from "./swagger.js";

import authRoutes from "./modules/auth/auth.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/api-docs",
  swaggerUiMiddleware.serve,
  swaggerUiMiddleware.setup(swaggerSpec)
);

app.use("/api/v1/auth", authRoutes);

export default app;
