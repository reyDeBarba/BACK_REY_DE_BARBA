import { Router } from "express";
import authRoutes from "./auth.js";
import barberRoutes from "./barber.js";
import discountsRoutes from "./discounts.js";
import postsRoutes from "./posts.js";
import servicesRoutes from "./services.js";
import usersRoutes from "./user.js";
import worksRoutes from "./works.js";

const router = Router();

/**
 * Juntamos todas las rutas en un solo path
 */
router.use("/auth", authRoutes);
router.use("/barbers", barberRoutes);
router.use("/discounts", discountsRoutes);
router.use("/posts", postsRoutes);
router.use("/services", servicesRoutes);
router.use("/users", usersRoutes);
router.use("/works", worksRoutes);

export default router;
