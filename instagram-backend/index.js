require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors') ; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Add this line to enable CORS

const PORT = process.env.PORT || 5000;

const Posts = require("./models/post.js");

mongoose.set("strictQuery", false);
const MONGO_URI = process.env.MONGO_URI
console.log(MONGO_URI);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

app.get("/posts", async (req, res) => {
  try {
    const allposts = await Posts.find();
    return res.status(200).json(allposts);
  } catch (error) {
    res.status(404).json({ error: error });
  }
});

app.post("/posts", async (req, res) => {
  const { username, imageUrl, comments = [], caption } = req.body;

  const newPost = new Posts({ username, imageUrl, comments, caption });
  const addPost = await newPost.save();

  res.status(200).json({ success: "Post Added Successfully" });
});

app.post("/posts/comment", async (req, res) => {
  try {
    const { postId, commentatorId, text } = req.body;
    console.log(postId, commentatorId, text);

    const getPost = await Posts.findOne({ _id: postId });
    const commentator = await Posts.findOne({ _id: commentatorId });

    if (getPost && commentator) {
      const commentatorName = commentator.username;

      if (!getPost.comments) {
        getPost.comments = [];
      }

      getPost.comments.push({ username: commentatorName, text });

      await getPost.save();

      res.status(200).json({ success: "Comment added successfully" });
    } else {
      res.status(404).json({ error: "Post or commentator not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Connect to the db
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server running at http:localhost:${PORT}`);
  });
});
