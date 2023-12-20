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

    res.status(201).json({
      msg: "comment created successfully",
      comment: comment,
    });
  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong");
  }
};

const getSingleComment = async (req, res) => {
  try {
    // postId and commentId
    // {
    //   "postId":"6582c2a3c5d33a27c1f8ae46",
    //   "commentId":"658307a5702495ee43a9b005"
    // }

    const { postId, commentId } = req.params;
    if (!postId || !commentId) {
      return res
        .status(401)
        .json("provide postId and commentId to retrieve comment!");
    }

    const comment = await Comment.findById({ _id: commentId });
    if (!comment) {
      return res.status(401).json("comment with this id does not exist!");
    }

    res.status(201).json({
      success: true,
      msg: "comment retrieved successfully",
      comment: comment,
    });
  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong");
  }
};

// delete comment
const deleteComment = async (req, res) => {
  try {
    const { postId, commentId } = req.params;
    if (!postId || !commentId) {
      return res
        .status(401)
        .json("provide postId and commentId to retrieve comment!");
    }

    // remove the comment id saved to post
    const commentPost = await Post.findOne({
      _id: postId,
    });

    if (commentPost.commentId.includes(commentId)) {
      commentPost.commentId.pull(commentId);
      await commentPost.save();
    }

    const deletedPost = await Comment.deleteOne({ _id: commentId });
    if (!deletedPost) {
      return res.status(401).json("this comment has already been deleted!");
    }

    res.status(201).json({
      success: true,
      msg: "comment deleted successfully",
    });
  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong");
  }
};

// get all comments
const getAllComments = async (req, res) => {
  try {
    // postId
    const { postId } = req.params;

    const allPostComments = await Comment.find({
      postId: postId,
    });
    // const allComments = await Comment.find();

    res.status(201).json({
      success: true,
      msg: "all posts retrieved successfully",
      commentAmount: allPostComments.length,
      comments: allPostComments,
    });
  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong");
  }
};

const likeComment = async (req, res) => {
  try {
    // we need the likeUserId
    const { postId, commentId } = req.params;
    const { likeUserId } = req.body;
    if (!postId || !commentId || !likeUserId) {
      return res
        .status(401)
        .json("provide post id, userId and commentId to like post!");
    }

    // // find the comment
    const comment = await Comment.findOne({ _id: commentId });
    if (!comment) {
      return res.status(401).json("postId is not correct!");
    }

    // check if the person has liked the comment before, if true unlike, else like
    if (comment.likeCount.includes(likeUserId)) {
      comment.likeCount.pull(likeUserId);
      await comment.save();
      return res.status(401).json("comment unliked successfully");
    }

    comment.likeCount.push(likeUserId);
    await comment.save();

    res.status(201).json({
      success: true,
      msg: "comment liked successfully",
      updatedComment: comment,
    });
  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong");
  }
};

const retweetComment = (req, res) => {
  try {
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
