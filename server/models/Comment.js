const mongoose = require("mongoose");
const schema = mongoose.Schema;

const commentSchema = new schema(
  {
    authorId: {
      type: String,
      required: [true, "authorId is required"],
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