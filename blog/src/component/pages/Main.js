import PostList from "../post/PostList";
import PageNavigation from "../pageNav/PageNavigation";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import EditInfo from "../contexts/EditContext";

function Main() {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const editContext = useContext(EditInfo);
  const reload = editContext.refreshNum;

  useEffect(() => {
    axios("https://myblog-jhg-default-rtdb.firebaseio.com/post.json")
      .then((res) => {
        const fetchedPosts = [];

        for (const key in res.data) {
          const fetchedPost = {
            id: key,
            ...res.data[key],
          };
          fetchedPosts.push(fetchedPost);
          setIsLoading(false);
        }
        setPost(fetchedPosts);
      })
      .catch((error) => {
        alert("error");
        console.error(error);
        setIsLoading(false);
      });
  }, [reload]);

  if (isLoading) {
    return <div>로딩중..</div>;
  }
  return (
    <div>
      <PageNavigation postData={post} />
      <PostList postData={post} />
    </div>
  );
}

export default Main;
