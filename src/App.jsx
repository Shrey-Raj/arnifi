import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import InstagramPostCard from "./components/InstagramPostCard";
import CommentsPage from "./components/CommentsPage";

const App = () => {
  const post = {
    username: "john_doe",
    imageUrl: "https://picsum.photos/600/400", // Placeholder image URL
    caption: "A beautiful sunset!",
    likes: 42,
  };

  return (
    <>
      {/* <h1>App</h1> */}
      <Routes>
        <Route exact path="/home" element={<HomePage />}></Route>
        <Route
          exact
          path="/post"
          element={<InstagramPostCard {...post} />}
        ></Route>
        <Route
        exact
        path="/posts/comments"
        element={<CommentsPage/>}
        ></Route>
      </Routes>

    </>
  );
};

export default App;
