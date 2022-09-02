import { Router } from "express";
import postController from "../controllers/post_controller.js";

const router = Router();

router.get("/", postController.getAllPosts);
router.post("/", postController.createPost);
router.put("/:id/likes", postController.likeDislike);
router.put("/:id/views", postController.viewsAndNotSeen);

export default router;
