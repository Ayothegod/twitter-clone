const Comment = require("../models/Comment");
const Post = require("../models/Post");
const User = require("../models/User");
const { validationResult } = require("express-validator");

const createComment = async (req, res) => {
  try {
    // authorId, postId, commentData

    const errors = validationResult(req);
    if (errors.isEmpty() === false) {
      return res.status(422).json({ errors: errors.array() });
    }

    // user/profile data using authorId
    const profileData = await User.findOne({
      _id: req.body.authorId,
    });

    const postData = await Post.findOne({
      _id: req.body.postId,
    });

    const comment = await Comment.create({
      authorId: profileData._id,
      authorPhoto: profileData.profilePhoto,
      authorUsername: profileData.username,
      authorFullname: profileData.fullname,
      commentData: req.body.commentData,
      postId: postData._id,
    });

    const commentId = await comment._id;

    // add commentId to postData commentId's array
    postData.commentId.push(commentId);
    await postData.save();

    res
      .status(201)
      .json({
        msg: "comment created successfully",
        comment: comment,
        postOfComment: postData,
      });
  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong");
  }
};

const getSingleComment = async (req, res) => {
  try {
    const { postId } = req.params;
    if (!postId) {
      return res.status(401).json("provide post id to retrieve post!");
    }

    const post = await Post.findById({ _id: postId });
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

const deleteComment = async (req, res) => {
  try {
    const { postId } = req.params;
    if (!postId) {
      return res.status(401).json("provide post id to retrieve post!");
    }

    const deletedPost = await Post.deleteOne({ _id: postId });
    if (!deletedPost) {
      return res.status(401).json("this post has already been deleted!");
    }

    res.status(201).json({
      success: true,
      msg: "post deleted successfully",
    });
  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong");
  }
};

const getAllComments = async (req, res) => {
  try {
    const allPosts = await Post.find();

    res.status(201).json({
      success: true,
      msg: "all posts retrieved successfully",
      postsAmount: allPosts.length,
      posts: allPosts,
    });
  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong");
  }
};

const likeComment = async (req, res) => {
  try {
    // we need the likeUserId
    const { postId } = req.params;
    const { likeUserId } = req.body;
    if (!postId || !likeUserId) {
      return res.status(401).json("provide post id and userId to like post!");
    }

    // find the post
    const post = await Post.findOne({ _id: postId });
    if (!post) {
      return res.status(401).json("postId is not correct!");
    }

    // check if the person has liked the post before, if true unlike, else like
    if (post.likeCount.includes(likeUserId)) {
      post.likeCount.pull(likeUserId);
      await post.save();
      return res.status(401).json("post unliked successfully");
    }

    post.likeCount.push(likeUserId);
    await post.save();

    res.status(201).json({
      success: true,
      msg: "post liked successfully",
      updatedPost: post,
    });
  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong");
  }
};

const retweetComment = (req, res) => {
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
  createComment,
  getSingleComment,
  deleteComment,
  getAllComments,
  likeComment,
  retweetComment,
};
