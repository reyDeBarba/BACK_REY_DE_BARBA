import User from "../models/User.js";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

const { sign } = jwt;

/**
 * Registro de usuario
 */

const register = async (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.HASH_SECRET_KEY
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json({ status: 201, message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ status: 400, error: error.message });
  }
};

/**
 * Login de usuario
 */

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const decode = CryptoJS.AES.decrypt(
      user.password,
      process.env.HASH_SECRET_KEY
    );
    const descryptedPassword = decode.toString(CryptoJS.enc.Utf8);

    const accessToken = sign(
      {
        id: user._id,
        barber: user.barber,
        admin: user.admin,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;

    !user || descryptedPassword !== req.body.password
      ? res
          .status(401)
          .json({ status: 401, error: "Wrong invalid credentials" })
      : res.status(200).json({
          ...others,
          accessToken,
          message: "Login successfully",
          status: 200,
        });
  } catch (error) {
    res.status(500).json({
      status: 400,
      error: error.message,
    });
  }
};

export default { register, login };
