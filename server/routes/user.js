const express = require("express");
const router = express.Router();
const { registerValidator, loginValidator } = require("../util/userValidator");
const { registerUser, loginUser } = require("../controller/user");


router.post("/auth/register", registerValidator, registerUser);
router.post("/auth/login", loginValidator, loginUser);

module.exports = router;
