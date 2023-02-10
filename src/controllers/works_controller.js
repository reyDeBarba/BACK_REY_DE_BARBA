import Works from '../models/Works.js';
import User from '../models/User.js';

const sortTime = (arr) => {
  return arr.sort(function (a, b) {
    let timeA = a.time.split(':').join('');
    let timeB = b.time.split(':').join('');
    return timeA - timeB;
  });
};

const getBarberWorkId = async (req, res) => {
  const { barberId } = req.params;

  try {
    const barberWorks = await Works.findOne({ user: barberId });

    if (!barberWorks)
      return res.status(500).json({
        status: 500,
        message: 'No se encontraron horarios para este barbero',
        data: { days: [] },
      });

    return res
      .status(200)
      .json({ status: 200, message: 'Turnos del barbero', data: barberWorks });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

const createBarberWork = async (req, res) => {
  const { barberId } = req.params;
  const newWork = req.body;

  try {
    const barberWork = await Works.findOne({ user: barberId });

    if (!barberWork) {
      const newWorkWithBarber = new Works({
        user: barberId,
        days: [newWork],
      });
      const savedWork = await newWorkWithBarber.save();
      return res.status(500).json({
        status: 500,
        message: 'No se encontraron horarios para este barbero',
        data: savedWork,
      });
    }
    const updateTurns = barberWork.days.find(
      (barberDay) => barberDay.date === newWork.date,
    );
    const deleteIndex = barberWork.days.findIndex(
      (barberDay) => barberDay.date === newWork.date,
    );

    if (!barberWork.days.some((barberDay) => barberDay.date === newWork.date)) {
      const savedWork = await Works.findByIdAndUpdate(
        barberWork._id,
        { $push: { days: newWork } },
        { new: true },
      );
      return res.status(200).json({
        status: 200,
        message: 'Turnos agregado al barbero',
        data: savedWork,
      });
    }

    if (
      barberWork.days.some((barberDay) => barberDay.date === newWork.date) &&
      updateTurns.turns.some((turn1) =>
        newWork.turns.some((turn2) => turn1.time === turn2.time),
      )
    ) {
      const groupTurns = [...updateTurns.turns, ...newWork.turns];

      const deleteDuplicated = (arr) => {
        const uniqueArray = [];

        arr.forEach(function (obj) {
          let isDuplicate = false;
          uniqueArray.forEach(function (uniqueObj) {
            if (uniqueObj.time === obj.time) {
              isDuplicate = true;
            }
          });
          if (!isDuplicate) {
            uniqueArray.push(obj);
          }
        });
        return uniqueArray;
      };

      const uniqueArray = deleteDuplicated(groupTurns);

      barberWork.days.splice(deleteIndex, 1);
      await barberWork.save();

      const newTurnsFilter = {
        ...updateTurns,
        turns: sortTime(uniqueArray),
      };
      const savedWork = await Works.findByIdAndUpdate(
        barberWork._id,
        { $push: { days: newTurnsFilter } },
        { new: true },
      );
      return res.status(200).json({
        status: 200,
        message: 'Turnos agregado al barbero',
        data: savedWork,
      });
    }

    if (barberWork.days.some((barberDay) => barberDay.date === newWork.date)) {
      barberWork.days.splice(deleteIndex, 1);
      await barberWork.save();

      const newTurns = {
        ...updateTurns,
        turns: sortTime(updateTurns.turns.concat(newWork.turns)),
      };
      const savedWork = await Works.findByIdAndUpdate(
        barberWork._id,
        { $push: { days: newTurns } },
        { new: true },
      );

      return res.status(200).json({
        status: 200,
        message: 'Turnos agregado al barbero',
        data: savedWork,
      });
    }
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

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
        message: 'Try to assign an unauthorized user for this action',
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
          .json({ status: 200, message: 'Successfully assigned shifts' });
      } catch (error) {
        res.status(500).json({ status: 500, error: error.message });
      }
    }
  } else {
    res.status(500).json({ status: 500, message: 'Error, try again later' });
  }
};

export default { assignWorkSchedules, createBarberWork, getBarberWorkId };
