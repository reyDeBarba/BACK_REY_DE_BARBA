import { Router } from "express";
import authRole from "../middleware/roleValidate.js";
import worksController from "../controllers/works_controller.js";

const router = Router();

router.post(
  "/:id",
  authRole.varifyTokenAndAdmin,
  worksController.assignWorkSchedules
);

export default router;
