import Turns from "../models/Turns.js";
import Works from "../models/Works.js";

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

const updateTurnsBarber = async (req, res) => {
  const { id } = req.params;
  const { dateReq, hourReq } = req.body;
  try {
    const work = await Works.findById({ _id: id });
    if (!work)
      res.status({ status: 500, message: "Error, no se encontro el horario" });
    const newDays = work?.days.map(({ date, day, turns }) => {
      if (day === dateReq && turns.includes(hourReq)) {
        const reduceTurn = turns.reduce(
          (acc, val) => (val !== hourReq ? acc.concat(val) : acc),
          []
        );
        return {
          date,
          day,
          turns: reduceTurn,
        };
      }
      return {
        date,
        day,
        turns,
      };
    });
    const newTurns = await Works.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          days: newDays,
        },
      },
      { new: true }
    );
    res
      .status(200)
      .json({ status: 200, message: "Turn update", data: newTurns });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default { createTurn, updateTurnsBarber };
