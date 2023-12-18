const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema(
  {
    fullname: {
      type: String,
      required: [true, "username is required"],
    },
    email: {
      type: String,
      unique: true,
    },
    username: {
      type: String,
      required: [true, "username is required"],
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    followers: {
      type: [String],
    },
    following: {
      type: [String],
    },
    profilePhoto: {
      type: String,
    },
    coverPhoto: {
      type: String,
    },
    location: {
      type: String,
    },
    profession: {
      type: String,
    },
    bio: {
      type: String,
    },
    website: {
      type: String,
    },
    postsId: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema)