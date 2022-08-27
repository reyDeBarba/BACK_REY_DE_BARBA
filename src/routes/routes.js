import { Router } from "express";
import authRoutes from "./auth.js";
import barberRoutes from "./barber.js";
import servicesRoutes from "./services.js";
import worksRoutes from "./works.js";

const router = Router();

/**
 * Juntamos todas las rutas en un solo path
 */
router.use("/auth", authRoutes);
router.use("/barbers", barberRoutes);
router.use("/services", servicesRoutes);
router.use("/works", worksRoutes);

export default router;
