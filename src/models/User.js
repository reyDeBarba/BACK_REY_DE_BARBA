import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      maxlength: 100,
      required: true,
      match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    },
    password: {
      type: String,
      minlength: 8,
      maxlength: 50,
    },
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    photoURL: { type: String, default: '' },
    points: { type: Number, default: 0 },
    barber: { type: Boolean, default: false },
    admin: { type: Boolean, default: false },
    works: { type: mongoose.Schema.Types.ObjectId, ref: 'Works' },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('User', UserSchema);
