import Discounts from "../models/Discounts.js";
import User from "../models/User.js";

const getAllDiscounts = async (req, res) => {
  try {
    const allDiscounts = await Discounts.find({});
    res.status(200).json({
      status: 200,
      message: "Successfully all discounts",
      data: allDiscounts,
    });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

const createDisucounts = async (req, res) => {
  const newDiscount = new Discounts({
    description: req.body.description,
    imageBanner: req.body.imageBanner,
    imageLogo: req.body.imageLogo,
    points: req.body.points,
    title: req.body.title,
  });

  try {
    await newDiscount.save();
    res
      .status(200)
      .json({ status: 200, message: "Successfully save discounts" });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

const updateDiscount = async (req, res) => {
  const { id } = req.params;
  try {
    const updateDiscount = await Discounts.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      status: 200,
      message: "Discount update successfully",
      data: updateDiscount,
    });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

const deleteDiscount = async (req, res) => {
  const { id } = req.params;
  try {
    const resp = await Discounts.findByIdAndDelete(id);
    res
      .status(200)
      .json({ status: 200, message: "Discount deleted", data: resp._id });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

const shopDiscount = async (req, res) => {
  const { id } = req.params;
  const { discountId } = req.body;
  try {
    const discount = await Discounts.findById(discountId);
    const user = await User.findById(id);
    if (!user || !discount)
      return res.status(500).json({ message: "No se encontraron los datos" });
    if (user.points < discount.points)
      return res.status(500).json({ message: "No le alcanzan los puntos" });
    if (user.points >= discount.points) {
      const userPoint = user.points;
      const discountPoint = discount.points;
      const userUpdate = await User.findByIdAndUpdate(
        { _id: user._id },
        { $set: { points: userPoint - discountPoint } },
        { new: true }
      );
      res
        .status(200)
        .json({ status: 200, message: "Points update...", data: userUpdate });
    }
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

export default {
  createDisucounts,
  deleteDiscount,
  getAllDiscounts,
  updateDiscount,
  shopDiscount,
};
