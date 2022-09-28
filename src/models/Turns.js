import mongoose from "mongoose";

const TurnsSchema = new mongoose.Schema(
  {
    date: { type: String },
    hour: { type: String },
    barberId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Services" },
    payment: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Turns", TurnsSchema);
