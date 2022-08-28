import Turns from "../models/Turns.js";

/**
 * Crear un turno
 * @param { date,hour,barberId,clientId,serviceId} req
 * @param {status,message} res
 */
const createTurn = async (req, res) => {
  const newTurn = new Turns({
    date: req.body.date,
    hour: req.body.hour,
    barberId: req.body.barberId,
    clientId: req.body.clientId,
    serviceId: req.body.serviceId,
  });
  try {
    const turn = await newTurn.save();
    res
      .status(201)
      .json({ status: 201, message: "Turn successfully created", data: turn });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

export default { createTurn };
