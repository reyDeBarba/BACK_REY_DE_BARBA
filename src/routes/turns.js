import { Router } from "express";
import turnController from "../controllers/turns_controller.js";
import authVerify from "../middleware/authVerify.js";
import roleValidate from "../middleware/roleValidate.js";

const router = Router();

/**
 * Crear un turno
 */
router.post("/", authVerify.verifyToken, turnController.createTurn);
/**
 * Actualizar turno de barbero
 */
router.put("/:id", turnController.updateTurnsBarber);

router.put("/:id/payment", turnController.updatePayment);
/**
 * Traer todos los turnos creados
 */
router.get("/", turnController.getAllTurns);

router.delete(
  "/:id",
  roleValidate.varifyTokenAndAdmin,
  turnController.deleteTurn
);

export default router;
