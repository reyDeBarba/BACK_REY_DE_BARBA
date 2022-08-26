import Services from "../models/Services.js";

/**
 * Crear un servicio
 */

const createService = async (req, res) => {
  const newService = new Services(req.body);
  try {
    const savedService = await newService.save();
    res
      .status(201)
      .json({ status: 201, message: "Service created successfully" });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

export default { createService };
