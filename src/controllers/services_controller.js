import Services from "../models/Services.js";

/**
 * Crear servicio
 * @param {*amount,description,photoURL,points,title} req
 * @param {status, message} res
 */

const createService = async (req, res) => {
  const newService = new Services({
    amount: req.body.amount,
    description: req.body.description,
    photoURL: req.body.photoURL,
    points: req.body.points,
    title: req.body.title,
  });
  try {
    await newService.save();
    res
      .status(201)
      .json({ status: 201, message: "Service created successfully" });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

export default { createService };
