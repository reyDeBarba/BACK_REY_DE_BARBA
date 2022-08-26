import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      maxlength: 100,
      required: true,
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
    password: {
      type: String,
      minlength: 8,
      maxlength: 50,
      required: true,
    },
    firstName: { type: String },
    lastName: { type: String },
    photoURL: { type: String },
    points: { type: Number },
    admin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
