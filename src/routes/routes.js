import { Router } from "express";
import authRoutes from "./auth.js";
import servicesRoutes from "./services.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/services", servicesRoutes);

export default router;
