const express = require("express");
const router = express.Router();
const { registerValidator, loginValidator } = require("../util/userValidator");
const { registerUser, loginUser, logout } = require("../controller/user");
const { isAuth } = require("../middleware/session");

router.post("/auth/register", registerValidator, registerUser);
router.post("/auth/login", loginValidator, loginUser);
router.delete("/auth/logout", loginValidator, logout);

module.exports = router;
