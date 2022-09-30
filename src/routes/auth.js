import { Router } from "express";
import authControllers from "../controllers/auth_controller.js";
import passport from "passport";
import GoogleStrategy from "passport-google-oidc";
import User from "../models/User.js";
import { Op } from "sequelize";

const router = Router();

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "/oauth2/redirect/google",
//       scope: ["profile"],
//     },
//     (accessToken, refreshToken, profile, cb) => {
//       const [user, created] = User.findOrCreate({
//         where: {
//           email: { [Op.in]: profile.emails.map((email) => email.value) },
//         },
//         defaults: {
//           email: profile.emails[0],
//           firstName: profile.givenName,
//           lastName: profile.familyName,
//           photoURL: profile.photos[0].value,
//           points: 0,
//         },
//       });

//       if (!created) {
//         cb(null, { ...user, accessToken, refreshToken });
//       } else {
//         cb(null, { ...user, accessToken, refreshToken });
//       }
//     }
//   )
// );

// passport.serializeUser(function (user, cb) {
//   process.nextTick(function () {
//     console.log(user.username);
//     cb(null, { id: user.id, username: user.username, name: user.name });
//   });
// });

// passport.deserializeUser(function (user, cb) {
//   process.nextTick(function () {
//     return cb(null, user);
//   });
// });

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

// router.get("/login/federated/google", passport.authenticate("google"));

// router.get(
//   "/oauth2/redirect/google",
//   passport.authenticate("google", {
//     successRedirect: "/",
//     failureRedirect: "/",
//   })
// );

export default router;
