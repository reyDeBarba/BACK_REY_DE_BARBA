import mongoose from 'mongoose';

const StorageSchema = new mongoose.Schema(
  {
    fileName: { type: String },
    photo: { type: String },
    photoPublicId: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model('Storage', StorageSchema);
