import { Router } from "express";
import authRole from "../middleware/roleValidate.js";
import discountsController from "../controllers/discounts_controller.js";

const router = Router();

router.post(
  "/",
  authRole.varifyTokenAndAdmin,
  discountsController.createDisucounts
);
router.get("/", discountsController.getAllDiscounts);
router.put("/:id", discountsController.updateDiscount);
router.delete("/:id", discountsController.deleteDiscount);

export default router;
