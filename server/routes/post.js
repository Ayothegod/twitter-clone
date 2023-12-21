const express = require("express");
const router = express.Router();
const {
  createPost,
  getSinglePost,
  deletePost,
  getAllPostsFromUser,
  getAllPosts,
  likePost,
  retweetPost,
} = require("../controller/post");
const { isAuth } = require("../middleware/session");
const { postValidator } = require("../util/userValidator");

router.get("/posts/post/:postId", isAuth, getSinglePost);

router.get("/posts/all", isAuth, getAllPosts);

router.get("/posts/user/:authorId", isAuth, getAllPostsFromUser);

router.post("/posts/post", postValidator, isAuth, createPost);

router.post("/posts/likes/:postId", isAuth, likePost);

router.post("/posts/post/:retweetUserId", isAuth, retweetPost);

router.delete("/posts/:postId", isAuth, deletePost);

module.exports = router;
