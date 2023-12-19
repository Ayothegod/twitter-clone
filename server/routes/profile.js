const express = require("express");
const { isAuth } = require("../middleware/session");
const { getUserProfile, updateUserProfile, deleteUserProfile } = require("../controller/profile");
const router = express.Router();

router.get("/profile/:username", isAuth, getUserProfile)
router.patch("/profile/update/:username", isAuth, updateUserProfile)
router.delete("/profile/delete/:username", isAuth, deleteUserProfile)

module.exports = router;