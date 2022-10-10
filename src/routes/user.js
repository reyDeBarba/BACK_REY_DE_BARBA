import { Router } from "express";
import userController from "../controllers/user_controller.js";
import authRole from "../middleware/roleValidate.js";

const router = Router();

router.get("/", userController.getAlluser);

router.get("/:id", userController.getOneUser);

router.put("/:id", userController.updateRole);

router.put("/:id/discount", userController.updatePoints);

router.delete("/:id", authRole.varifyTokenAndAdmin, userController.deleteUser);

export default router;
