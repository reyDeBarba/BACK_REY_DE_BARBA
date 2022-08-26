import mongoose from "mongoose";

const WorksSchema = new mongoose.Schema(
  {
    barberId: { type: Schema.Types.ObjectId, ref: "User" },
    days: { type: Array },
  },
  { timestamps: true }
);

export default mongoose.model("Works", WorksSchema);
