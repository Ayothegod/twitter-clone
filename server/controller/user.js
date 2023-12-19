const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { hashPassword, matchPassword } = require("../util/hashPassword");
const User = require("../models/User");

const registerUser = async (req, res) => {
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
      website: req.body.password, //remove later
    });

    req.session.isAuth = true;
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (errors.isEmpty() === false) {
      return res.status(422).json({ errors: errors.array() });
    }

    // check if you exist or not
    const checkForUser = await User.findOne({
      username: req.body.username,
    });
    if (!checkForUser) {
      return res.status(301).json("user with this username does not exist");
    }

    // decrypt password
    const matchedPassword = await matchPassword(
      req.body.password,
      checkForUser.password
    );

    if (!matchedPassword) {
      return res.status(404).json("username or password is not correct");
    }

    req.session.isAuth = true;
    res.status(201).json(checkForUser);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const logout = (req, res) => {
  try {
    req.session.destroy();
    res.status(200).json("User session has been logged out.");
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

module.exports = { registerUser, loginUser, logout };
