const express = require("express")
const router = express.Router()
const {createPost, getSinglePost, deletePost, getAllPostsFromUser, getAllPosts} = require("../controller/post")
const { isAuth } = require("../middleware/session")
const { postValidator } = require("../util/userValidator")

router.get("/posts/:postId", isAuth, getSinglePost)
router.get("/posts/all", isAuth, getAllPosts)
router.get("/posts/user", isAuth, getAllPostsFromUser)
router.post("/posts/post", postValidator, isAuth, createPost)
router.delete("/posts/:postId", isAuth, deletePost)

module.exports = router
