import User from '../models/User.js';

/**
 * Crear barbero
 * @param {email,firstName,photoURL} req
 * @param {status,message} res
 */
const createBarber = async (req, res) => {
  const newBarber = new User({
    email: req.body.email,
    firstName: req.body.firstName,
    photoURL: req.body.photoURL,
    barber: true,
  });

  try {
    await newBarber.save();
    res
      .status(201)
      .json({ status: 201, message: 'Barber successfully created' });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

/**
 *  Traer un barbero
 * @param {params.id} req
 * @param {status,message,data: object{barber.concat(works)}} res
 */
const getOneBarber = async (req, res) => {
  try {
    const barber = await User.findOne({ _id: req.params.id })
      .populate('works')
      .exec();

    res
      .status(200)
      .json({ status: 200, message: 'Successfully', data: barber });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

/**
 *  Traer todos los barberos
 * @param {---} req
 * @param {status,message,data: object{allBarbers.concat(works)}} res
 */
const getAllBarbers = async (req, res) => {
  try {
    const allBarbers = await User.find({ barber: true })
      .populate('works')
      .exec();

    res
      .status(200)
      .json({ status: 201, message: 'Successfully', data: allBarbers });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

const deleteBarber = async (req, res) => {
  const { id } = req.params;
  try {
    const barber = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      status: 200,
      message: 'Successfully delete barber',
      data: barber,
    });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

export default { createBarber, getAllBarbers, getOneBarber, deleteBarber };
