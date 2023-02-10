import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect(process.env.LOCAL_DB)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));
