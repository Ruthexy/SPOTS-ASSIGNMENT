import React, { useState } from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import NewPostForm from "../components/NewPostForm";
import ImageList from "../ImageList"

function Home() {
  const [posts, setPosts] = useState([]);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="container">
      <Header />
      <Profile />
      <NewPostForm onAddPost={handleAddPost} />
      
        <ImageList />
      
      
    </div>
  );
}

export default Home;
