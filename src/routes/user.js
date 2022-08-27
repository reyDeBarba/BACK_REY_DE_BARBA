import { Router } from "express";
import userController from "../controllers/user_controller.js";
import authRole from "../middleware/roleValidate.js";

const router = Router();

router.get("/", authRole.varifyTokenAndAdmin, userController.getAlluser);

router.get("/:id", authRole.varifyTokenAndAdmin, userController.getOneUser);

router.put("/:id", authRole.varifyTokenAndAdmin, userController.updateRole);

router.delete("/:id", authRole.varifyTokenAndAdmin, userController.deleteUser);

export default router;
