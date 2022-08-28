import Services from "../models/Services.js";

/**
 * Traer todos los servicios
 * @param {----} req
 * @param {status, message,data<Array[Services]>} res
 */

const allServices = async (req, res) => {
  try {
    const allServices = await Services.find({});
    res
      .status(200)
      .json({
        status: 200,
        message: "Successfully, all services",
        data: allServices,
      });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};
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

export default { allServices, createService };
