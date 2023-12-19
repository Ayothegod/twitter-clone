const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { hashPassword } = require("../util/hashPassword");

const createUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (errors.isEmpty() === false) {
      return res.status(422).json({ errors: errors.array() });
    }

    const hash = await hashPassword(req.body.password)



    res.status(201).json({
      username: req.body.username,
      fullname: req.body.fullname,
      password: hash,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { createUser };

// validate all data, encrypt password, check if user exist, save
