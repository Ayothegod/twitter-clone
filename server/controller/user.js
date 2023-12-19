const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { hashPassword } = require("../util/hashPassword");
const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (errors.isEmpty() === false) {
      return res.status(422).json({ errors: errors.array() });
    }

    // hash password
    const hashedPassword = await hashPassword(req.body.password);

    // check if you exist or not
    const checkIfUserExist = await User.findOne({
      username: req.body.username,
    });
    if (checkIfUserExist) {
      return res.status(301).json("user with this username already exists!");
    }

    const user = await User.create({
      username: req.body.username,
      fullname: req.body.fullname,
      password: hashedPassword,
    });

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { createUser };

// validate all data, encrypt password, check if user exist, save
