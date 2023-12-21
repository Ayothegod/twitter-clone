const express = require("express");
const { isAuth } = require("../middleware/session");
const { getUserProfile, updateUserProfile, deleteUserProfile } = require("../controller/profile");
const { follower, following, } = require("../controller/others");
const router = express.Router();

router.get("/profile/:username", isAuth, getUserProfile)
router.patch("/profile/update/:username", isAuth, updateUserProfile)
router.delete("/profile/delete/:username", isAuth, deleteUserProfile)

router.post("/profile/:username/follow-me", isAuth, follower)
router.post("/profile/:followedUsername/i-follow", isAuth, following)

module.exports = router;