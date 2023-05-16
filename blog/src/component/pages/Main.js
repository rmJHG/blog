import PostList from "../post/PostList";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import EditInfo from "../store/isEdit";

function Main() {
  const [loadingPost, setLoadingPost] = useState([]);
  const editContext = useContext(EditInfo);
  const reload = editContext.refreshNum;

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
      setLoadingPost(posts);
    });
  }, [reload]);

  return (
    <div>
      <PostList postData={loadingPost} />
    </div>
  );
}

export default Main;
