import Post from "../models/Posts.js";

/**
 * Crear un post
 * @param {images<Array[string]>,description,user:ObjectId,likes<Array[ids]>,views<Array[ids]>} req
 * @param {*} res
 */
const createPost = async (req, res) => {
  const newPost = new Post({
    images: req.body.images,
    description: req.body.description,
    user: req.body.user,
    services: req.body.services,
  });
  try {
    const savedPost = await newPost.save();
    res.status(201).json({
      status: 201,
      message: "Post successfully created",
      data: savedPost,
    });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find({})
      .populate("user")
      .populate("services")
      .exec();
    res.status(200).json({
      status: 200,
      message: "Successfully get all posts",
      data: allPosts,
    });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

const likeDislike = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json({ status: 200, message: "The post has been liked" });
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res
        .status(200)
        .json({ status: 200, message: "The post has been disliked" });
    }
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

//NO DEBE PODER QUITAR QUE VIO LA PUBLICACIÖN
const viewsAndNotSeen = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post.views.includes(req.body.userId)) {
      await post.updateOne({ $push: { views: req.body.userId } });
      res.status(200).json({ status: 200, message: "The post has been view" });
    }
    res.status(200).json({ status: 200, message: "You view post" });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const postDeleted = await Post.findByIdAndDelete(id);
    res.status(200).json({
      status: 200,
      message: "Successfully user deleted",
      data: postDeleted._id,
    });
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

export default {
  createPost,
  deletePost,
  getAllPosts,
  likeDislike,
  viewsAndNotSeen,
};
