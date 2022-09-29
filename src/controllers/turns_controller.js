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
    const turnSaved = await Turns.findById(turn._id)
      .populate("barberId", {
        firstName: 1,
        photoURL: 1,
        email: 1,
      })
      .populate("clientId", {
        email: 1,
        firstName: 1,
        photoURL: 1,
      })
      .populate("serviceId", {
        amount: 1,
        description: 1,
        photoURL: 1,
        points: 1,
        title: 1,
      });
    res.status(201).json({
      status: 201,
      message: "Turn successfully created",
      data: turnSaved,
    });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

const getAllTurns = async (req, res) => {
  try {
    const turns = await Turns.find({})
      .populate("barberId", {
        firstName: 1,
        photoURL: 1,
        email: 1,
      })
      .populate("clientId", {
        email: 1,
        firstName: 1,
        photoURL: 1,
      })
      .populate("serviceId", {
        amount: 1,
        description: 1,
        photoURL: 1,
        points: 1,
        title: 1,
      });
    res
      .status(200)
      .json({ status: 200, message: "Successful request", data: turns });
  } catch (error) {
    res.status(500).json({ status: "Error", error: error.message });
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
    )
      .populate("barberId", {
        firstName: 1,
        photoURL: 1,
        email: 1,
      })
      .populate("clientId", {
        email: 1,
        firstName: 1,
        photoURL: 1,
      })
      .populate("serviceId", {
        amount: 1,
        description: 1,
        photoURL: 1,
        points: 1,
        title: 1,
      });
    res
      .status(200)
      .json({ status: 200, message: "Turn update", data: newTurns });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updatePayment = async (req, res) => {
  const { id } = req.params;
  try {
    const turnPayment = await Turns.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    )
      .populate("barberId", {
        firstName: 1,
        photoURL: 1,
        email: 1,
      })
      .populate("clientId", {
        email: 1,
        firstName: 1,
        photoURL: 1,
      })
      .populate("serviceId", {
        amount: 1,
        description: 1,
        photoURL: 1,
        points: 1,
        title: 1,
      });
    res.status(200).json({
      status: 200,
      message: "Successfully update works payment",
      data: turnPayment,
    });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

const deleteTurn = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTurn = await Turns.findByIdAndDelete({ _id: id });
    res
      .status(200)
      .json({ status: 200, message: "Deleted turn", data: deletedTurn });
  } catch (error) {
    res.status(500).json({ status: "Error", error: error.message });
  }
};

export default {
  createTurn,
  deleteTurn,
  getAllTurns,
  updateTurnsBarber,
  updatePayment,
};
