import PostList from "../post/PostList";
import { useState, useEffect } from "react";
import axios from "axios";

function Main() {
  const [lodingPost, setLodingPost] = useState([]);
  
  useEffect(() => {
    axios("https://myblog-jhg-default-rtdb.firebaseio.com/post.json").then((res) => {
      const posts = [];

      for (const key in res.data) {
        const post = {
          id: key,
          ...res.data[key],
        };
        posts.push(post);
      }
      setLodingPost(posts);
    
    });
  },[]);

  return (
    <div>
      <PostList postData={lodingPost} />
    </div>
  );
}

export default Main;
