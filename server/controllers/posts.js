import Post from "../models/post.js";

export const getPost = async (req, res) => {
  try {
    const posts = await Post.find();
    return res.status(200).json({ posts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  try {
    const newPost = await Post.create(post);
    return res.status(201).json({ newPost });
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};
