const mongoose = require("mongoose");
const schema = mongoose.Schema;

const bookmarkSchema = new schema(
  {
    bookmarkAuthorId: {
      type: String,
      required: true,
    },
    post: {},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Bookmark", bookmarkSchema);
