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
router.delete("/:id", discountsController.deleteDiscount);
router.put("/:id", discountsController.updateDiscount);
router.put("/:id/point", discountsController.shopDiscount);

export default router;
