import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const PostSchema = new mongoose.Schema(
  {
    images: { type: Array },
    description: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    services: { type: mongoose.Schema.Types.ObjectId, ref: 'Services' },
    likes: { type: Array, default: [] },
    views: { type: Array, default: [] },
  },
  { timestamps: true }
);

PostSchema.plugin(paginate);

export default mongoose.model('Post', PostSchema);
