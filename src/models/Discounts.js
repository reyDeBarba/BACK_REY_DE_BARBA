import mongoose from "mongoose";

const DiscountsSchema = new mongoose.Schema(
  {
    description: { type: String },
    imageBanner: { type: String },
    imageLogo: { type: String },
    points: { type: Number },
    title: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Discounts", DiscountsSchema);
