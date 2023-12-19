const express = require("express");
const { isAuth } = require("../middleware/session");
const { getUserProfile, updateUserProfile, deleteUserProfile } = require("../controller/profile");
const router = express.Router();

router.get("/profile", isAuth, getUserProfile)
router.patch("/profile/update", isAuth, updateUserProfile)
router.delete("/profile/delete", isAuth, deleteUserProfile)

module.exports = router;