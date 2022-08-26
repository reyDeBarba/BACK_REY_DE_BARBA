import { Router } from "express";
import serviceControllers from "../controllers/services_controller.js";
import roleValidate from "../middleware/roleValidate.js";

const router = Router();

/**
 * Crear un nuevo servicio
 */

router.post(
  "/",
  roleValidate.varifyTokenAndAdmin,
  serviceControllers.createService
);

export default router;
