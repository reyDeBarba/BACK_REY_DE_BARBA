import { Router } from "express";
import discountsController from "../controllers/discounts_controller.js";

const router = Router();

router.post("/", discountsController.createDisucounts);
router.get("/", discountsController.getAllDiscounts);
router.put("/:id", discountsController.updateDiscount);
router.delete("/:id", discountsController.deleteDiscount);

export default router;
