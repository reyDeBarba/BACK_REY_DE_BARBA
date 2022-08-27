import Works from "../models/Works.js";
import User from "../models/User.js";

/**
 * Asignamos horarios de trabajo a un barbero
 * @param {id:barber,days:dias,horarios asignados} req
 * @param {status, message} res
 * @returns
 */
const assignWorkSchedules = async (req, res) => {
  const { id } = req.params;
  if (id) {
    const user = await User.findById(id);
    if (!user.barber) {
      return res.status(500).json({
        status: 500,
        message: "Try to assign an unauthorized user for this action",
      });
    } else {
      const newWork = new Works({
        barberId: id,
        days: req.body.days,
      });
      try {
        const savedWork = await newWork.save();
        await user.updateOne({ works: savedWork._id });
        res
          .status(200)
          .json({ status: 200, message: "Successfully assigned shifts" });
      } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
      }
    }
  } else {
    res.status(500).json({ status: 500, message: "Error, try again later" });
  }
};

export default { assignWorkSchedules };
