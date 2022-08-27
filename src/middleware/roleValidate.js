import authVerify from "./authVerify.js";

/**
 * Verificar si el usuario actual es Admin
 * @param {*} req
 * @param {*} res
 * @param {*} next
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
