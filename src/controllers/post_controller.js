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
    const allPosts = await Post.find({}).populate("user").exec();
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

const viewsAndNotSeen = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post.views.includes(req.body.userId)) {
      await post.updateOne({ $push: { views: req.body.userId } });
      res.status(200).json({ status: 200, message: "The post has been view" });
    } else {
      await post.updateOne({ $pull: { views: req.body.userId } });
      res
        .status(200)
        .json({ status: 200, message: "The post has been not seen" });
    }
  } catch (error) {
    res.status(500).json({ status: 500, error: error.message });
  }
};

export default { createPost, getAllPosts, likeDislike, viewsAndNotSeen };
