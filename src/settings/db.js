import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { seedDB } from './seed_db.js';

dotenv.config();

const connectionDb = () =>
  mongoose
    .connect(process.env.LOCAL_DB)
    .then(() => {
      console.log('CONECTED DATABASE');
      seedDB();
    })
    .catch((err) => console.log(err));

export default connectionDb;
