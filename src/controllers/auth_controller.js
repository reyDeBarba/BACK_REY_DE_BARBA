import User from "../models/User.js";
import CryptoJS, { x64 } from "crypto-js";
import jwt from "jsonwebtoken";

const { sign } = jwt;

/**
 * Registro de usuario
 * @param req email, password
 * @param res data del usuario registrado
 */

const register = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = User.findOne({email})
    if(user) throw {message: 'Este email ya está siendo usado por otro usuario', status: 409}
  
    const newUser = new User({
      email,
      password: CryptoJS.AES.encrypt(
        password,
        process.env.HASH_SECRET_KEY
      ).toString(),
    });
    await newUser.save();
    const { password, ...others } = newUser._doc;

    res.status(201).json(...others);
  } catch (error) {
    res.status(error.status||500).send(error.message);
  }
};

const registerWithGoogle = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = User.findOne({email})
    if(user) throw {message: 'Este email ya está siendo usado por otro usuario', status: 409}
  
    const newUser = new User({
      email,
      password: CryptoJS.AES.encrypt(
        password,
        process.env.HASH_SECRET_KEY
      ).toString(),
    });
    await newUser.save();
    const { password, ...others } = newUser._doc;

    res.status(201).json(...others);
  } catch (error) {
    res.status(error.status||500).send(error.message);
  }
};

/**
 * Login del usuario
 * @param req email, password
 * @param res data del usuario
 */

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if(!user) throw {message: 'No existe un usuario con este email', status: 404}

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

    if(descryptedPassword !== req.body.password) throw {message: 'Credenciales inválidas', status: 401}
    else res.status(200).json({
        ...others,
        accessToken,
      });
  } catch (error) {
    res.status(error.status||500).send(error.message);
  }
};

export default { register, registerWithGoogle, login };
