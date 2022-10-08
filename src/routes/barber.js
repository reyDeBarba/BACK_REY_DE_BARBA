import { Router } from "express";
import authRole from "../middleware/roleValidate.js";
import verify from "../middleware/authVerify.js";
import barberController from "../controllers/barber_controller.js";

const router = Router();

/**
 * Crear barbero
 */
router.post("/", authRole.varifyTokenAndAdmin, barberController.createBarber);

/**
 * Traer un barbero
 */
router.get("/:id", barberController.getOneBarber);

/**
 * Traer todos los barberos
 */
router.get("/", barberController.getAllBarbers);

export default router;
