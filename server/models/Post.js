const mongoose = require("mongoose");
const schema = mongoose.Schema;

const postSchema = new schema(
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
    },
    authorFullname: {
      type: String,
      required: true,
    },
    postData: {
        type: String,
        required: true,
    },
    commentId: {
      type: [String],
      ref: "Comment"
    },
    likeCount: {
      type: [String],
    },
    retweetCount: {
      type: [String],
    },
    bookmarked: {
      type: Boolean,
      default: false
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema)