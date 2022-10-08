import { seedDB } from '../settings/seed_db.js'

const createDataSeed = async (req, res) => {
  try {
    await seedDB();
    res.send({message:'DATA BASE CARGADA'});
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

export {createDataSeed}