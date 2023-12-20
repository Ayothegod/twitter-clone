const mongoose = require("mongoose");
const schema = mongoose.Schema;

const commentSchema = new schema(
  {
    authorId: {
      type: String,
      required: [true, "authorId is required"],
    },
    authorPhoto: {
      type: String,
    },
    authorUsername: {
      type: String,
      required: [true, "author username is required"],
      unique: true,
      index: true,
    },
    authorFullname: {
      type: String,
      required: true,
    },
    commentData: {
        type: String,
        required: true,
    },
    postId: {
      type: String,
    },
    likeCount: {
      type: [String],
    },
    retweetCount: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema)