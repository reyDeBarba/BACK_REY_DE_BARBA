import jwt from "jsonwebtoken";
const { verify } = jwt;

/**
 * Verificar si un usuario esta logeado
 * @param {por headers, token de authorization} req
 * @param {uset authorizate!} res
 * @param {func de callback para seguir ejecución} next
 * @returns
 */

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if (bearerHeader) {
    const token = bearerHeader.split(" ")[1];
    verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err)
        res.status(403).json({
          status: 403,
          error: err.message,
          message: "Token is not valid!",
        });
      req.user = user;
      next();
    });
  } else {
    return res
      .status(401)
      .json({ status: 401, message: "You are not authenticated!" });
  }
};

export default { verifyToken };
