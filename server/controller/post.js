const Post = require("../models/Post");
const User = require("../models/User");
const { validationResult } = require("express-validator");

const createPost = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (errors.isEmpty() === false) {
      // can't find how to destructure this error => to the frontend
      return res.status(422).json({ errors: errors.array() });
    }

    // post user data using id
    const profileData = await User.findOne({
      _id: req.body.authorId,
    });

    const post = await Post.create({
      authorId: profileData._id,
      authorPhoto: profileData.profilePhoto,
      authorUsername: profileData.username,
      authorFullname: profileData.fullname,
      postData: req.body.postData,
    });

    const postId = await post._id;

    // add postId to profileData postId's array
    profileData.postsId.push(postId);
    await profileData.save();

    res.status(201).json({ msg: "post created successfully", post: post });
  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong");
  }
};

const getSinglePost = async (req, res) => {
  try {
    const { postId } = req.params;
    if (!postId) {
      return res.status(401).json("provide post id to retrieve post!");
    }

    const post = await Post.findById({ _id:postId });
    if (!post) {
      return res.status(401).json("post with this id does not exist!");
    }

    res.status(201).json({
      success: true,
      msg: "post retrieved successfully",
      post: post,
    });
  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong");
  }
};

const deletePost = (req, res) => {
  try {
    res.status(201).json("Alright");
  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong");
  }
};

const getAllPostsFromUser = (req, res) => {
  try {
    res.status(201).json("Alright");
  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong");
  }
};

const getAllPosts = (req, res) => {
  try {
    res.status(201).json("Alright");
  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong");
  }
};

const likePost = (req, res) => {
  try {
    // we need the likeUserId
    res.status(201).json("Alright");
    // check if the person has liked the post before, if true unlike, else like
  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong");
  }
};

const retweetPost = (req, res) => {
  try {
    // I dont want to even think about this endpoint now at all
    // retweetUserId
    res.status(201).json("Alright");
  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong");
  }
};

module.exports = {
  createPost,
  getSinglePost,
  deletePost,
  getAllPostsFromUser,
  getAllPosts,
  likePost,
  retweetPost,
};
