import { Router } from "express";
import userControllers from "../controllers/user_controller.js";

const router = Router();

/**
 * Registro de usuario
 */

router.post("/register", userControllers.register);

/**
 * Login de usuario
 */

router.post("/login", userControllers.login);

export default router;
