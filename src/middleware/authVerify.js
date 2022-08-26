import jwt from "jsonwebtoken";
const { verify } = jwt;

/**
 * Se verifica si el usuario esta logeado
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
