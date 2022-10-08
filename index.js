import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "./src/settings/db.js";
import indexRoutes from "./src/routes/routes.js";
import swaggerUI from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./src/settings/swaggerOptions.js";
import { seedDB } from './src/settings/seed_db.js'

const seed = process.env.SEED_DB

const app = express();
dotenv.config();

/**
 * Middleware express
 */
app.use(cors("*"));
app.use(express.json());

const specs = swaggerJsdoc(options);

/**
 * Path principal
 */
app.use("/api", indexRoutes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

/**
 * Ejecutnado Servidor
 */
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT || 8000}`);
  if(seed === 'true') {
    seedDB()
  }
});

