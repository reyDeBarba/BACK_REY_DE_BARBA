import authVerify from "./authVerify.js";

/**
 * Verificación de si el usuario es admin
 */
const varifyTokenAndAdmin = (req, res, next) => {
  authVerify.verifyToken(req, res, () => {
    if (req.user.admin) {
      next();
    } else {
      res
        .status(403)
        .json({ status: 403, message: "You are not alowed to do that!" });
    }
  });
};

export default { varifyTokenAndAdmin };
