import { Router } from "express";
import authControllers from "../controllers/auth_controller.js";

const router = Router();

/**
 * @swagger
 * componets:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of User
 *        email:
 *          type: string
 *          description: email unique the user
 *
 */

/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: user authentication
 */

/**
 * @swagger
 * /api/auth/register:
 *  post:
 *    summary: register new user
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      201:
 *        description: user created successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      500:
 *        description: Some server error
 */

router.post("/register", authControllers.register);

/**
 * Login de usuario
 */

router.post("/login", authControllers.login);

export default router;
