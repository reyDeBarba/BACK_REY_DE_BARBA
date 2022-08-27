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
    },
    firstName: { type: String },
    lastName: { type: String },
    photoURL: { type: String },
    points: { type: Number },
    barber: { type: Boolean, default: false },
    admin: { type: Boolean, default: false },
    works: { type: mongoose.Schema.Types.ObjectId, ref: "Works" },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
