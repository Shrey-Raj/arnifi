const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: Date,
    required: true,
    default:Date.now()
  },
  imageUrl: {
    type: String,
    required: true,
  },
  comments: [
    {
      username: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    },
  ],
  caption: {
    type: String,
    required: true,
  },
});

const Post = new mongoose.model("Post", postSchema);
module.exports = Post;
