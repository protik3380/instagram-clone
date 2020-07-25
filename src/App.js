import React, { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Protik",
      caption: "Wow its work",
      imageUrl:
        "https://www.tuexpertomovil.com/wp-content/uploads/2019/03/instagram.jpg",
    },
    {
      username: "Xcross",
      caption: "Wow its work",
      imageUrl:
        "data:image/png;base64,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",
    },
  ]);
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          alt=""
        />
      </div>
      <h1>Hello !!!</h1>

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}
export default App;
