const express = require("express");
const router = express.Router();
const { isAuth } = require("../middleware/session");
const { commentValidator } = require("../util/userValidator");
const {
  createComment,
  getSingleComment,
  deleteComment,
  getAllComments,
  likeComment,
  retweetComment,
} = require("../controller/comment");

router.get("/posts/post/:postId/comments/:commentId", isAuth, getSingleComment);

router.get("/posts/post/:postId/comments", isAuth, getAllComments);

router.post("/posts/post/comments/comment", commentValidator, isAuth, createComment);

router.post("/posts/likes/:postId/comments/likes/:commentId", isAuth, likeComment);

router.post("/posts/post/:retweetUserId/comments/comment/:retweetId", isAuth, retweetComment);

router.delete("/posts/:postId/comments/:commentId", isAuth, deleteComment);

module.exports = router;
