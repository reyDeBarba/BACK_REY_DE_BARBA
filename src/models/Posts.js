import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    images: { type: Array },
    description: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    likes: { type: Array, default: [] },
    views: { type: Array, default: [] },
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostSchema);
