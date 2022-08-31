import User from "../models/User.js";

/**
 * Trae un usuario especifico
 * @param {*} req
 * @param {status,message,data: <object{User}>} res
 */
const getOneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res
      .status(200)
      .json({ status: 200, message: "Successfully all users", data: user });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

/**
 * Trae todos los usuarios que no son barberos
 * @param {*} req
 * @param {status,message,data<Array{User}>} res
 */
const getAlluser = async (req, res) => {
  try {
    const allUser = await User.find({});
    res
      .status(200)
      .json({ status: 200, message: "Successfully all users", data: allUser });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

/**
 * Actuliza el role del usuario
 * @param {id: params.id} req
 * @param {status,message,data<object{User}>} res
 */
const updateRole = async (req, res) => {
  const { id } = req.params;
  try {
    const userUpdate = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      status: 200,
      message: "Successfully update user role",
      data: userUpdate,
    });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

/**
 * Borra de base de datos un usuario
 * @param {id: params.id} req
 * @param {status,message} res
 */
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ status: 200, message: "Successfully user deleted" });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

export default { getAlluser, getOneUser, deleteUser, updateRole };
