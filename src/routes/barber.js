import { Router } from "express";
import authRole from "../middleware/roleValidate.js";
import barberController from "../controllers/barber_controller.js";

const router = Router();

/**
 * Crear barbero
 */
router.post("/", authRole.varifyTokenAndAdmin, barberController.createBarber);

/**
 * Traer un barbero
 */
router.get("/:id", authRole.varifyTokenAndAdmin, barberController.getOneBarber);

/**
 * Traer todos los barberos
 */
router.get("/", authRole.varifyTokenAndAdmin, barberController.getAllBarbers);

export default router;
