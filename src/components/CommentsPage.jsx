import React from "react";
import { Avatar, List, Card } from "antd";

import { useLocation } from "react-router-dom";

// PostCard.js

const post = {
  username: "user1",
  timeStamp: "2023-1116T13:00.000Z",
  imageUrl: "https://picsum.photos/300/200",
  comments: [
    {
      _id: "65572dd08a1c3cf7afc757e8",
      username: "commenter1",
      text: "Great post!",
    },
    {
      _id: "65572dd08a1c3cf7afc757e9",
      username: "commenter2",
      text: "Love it!",
    },
  ],
  caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

const PostCard = (prop) => {
  const location = useLocation();
  const { state } = location;
  const post = state.post;

//   console.log("post from  comments ", post);

// const { prop = prop } = location.state || {}

  return (
    <div>
      <img src={post.imageUrl} alt="Post" />
      <p>{post.caption}</p>
      <div>
        <h4>Comment:</h4>
        <List
          dataSource={post.comments}
          renderItem={(comment, index) => (
            <Card key={index} style={{ marginBottom: 10 }}>
              <Card.Meta
                avatar={
                  <Avatar
                    src={`URL_TO_USER_AVATAR/${comment.username}.png`}
                    alt={comment.username}
                  />
                }
                title={<a>{comment.username}</a>}
                description={comment.text}
              />
            </Card>
          )}
        />
      </div>
    </div>
  );
};

export default PostCard;
