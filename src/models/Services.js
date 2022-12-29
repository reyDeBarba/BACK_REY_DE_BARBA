import mongoose from 'mongoose';

const ServicesSchema = new mongoose.Schema(
  {
    amount: { type: String },
    description: { type: String },
    photoURL: { type: String },
    points: { type: Number },
    title: { type: String },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.model('Services', ServicesSchema);
