const Post = require("../models/Post");
const User = require("../models/User");
const Comment = require("../models/Comment");
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

    res.status(201).json({success: true, msg: "post created successfully", post: post });
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

    const post = await Post.findById({ _id: postId }).populate("commentId")
    if (!post) {
      return res.status(401).json("post with this id does not exist!");
    }

    res.status(201).json({
      success: true,
      msg: "post retrieved successfully",
      post: post,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error("Something went wrong");
  }
};

// delete post
const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    if (!postId) {
      return res.status(401).json("provide post id to retrieve post!");
    }

    // delete all comment associated with it
    const deletePostComments = await Comment.deleteMany({
      postId: postId,
    });

    const removeDeletedPostIdFromProfile = await User.find();

    // remove the post id from the profile postsId
    const indProfile = removeDeletedPostIdFromProfile.map(async (user) => {
      if (user.postsId.includes(postId)) {
        user.postsId.pull(postId);
        await user.save();
      }
    });

    const deletedPost = await Post.deleteOne({ _id: postId });
    if (!deletedPost) {
      return res.status(401).json("this post has already been deleted!");
    }

    res.status(201).json({
      success: true,
      msg: "post deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error("Something went wrong");
  }
};

// get all post for a single user
const getAllPostsFromUser = async (req, res) => {
  try {
    const { authorId } = req.params;
    if (!authorId) {
      return res.status(401).json("provide post id to retrieve post!");
    }

    const userOfId = await User.findById({ _id: authorId });
    if (!userOfId) {
      return res.status(401).json("user with this id does not exist");
    }

    const allUserPosts = await Post.find({ authorId: userOfId._id });

    res.status(201).json({
      success: true,
      msg: "posts retrieved successfully",
      postsAmount: allUserPosts.length,
      posts: allUserPosts,
    });
  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong");
  }
};

// get all post - general
const getAllPosts = async (req, res) => {
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

// like posts
const likePost = async (req, res) => {
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

// im not touching retweet enpoint now - lol
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
