const express = require("express");
const router = express.Router();
const { registerValidator } = require("../util/userValidator");
const { createUser } = require("../controller/user");

router.post("/user", registerValidator, createUser);

module.exports = router;
