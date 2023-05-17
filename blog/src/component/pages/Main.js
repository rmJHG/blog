import PostList from "../post/PostList";
import PageNavigation from "../layout/PageNavigation";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import EditInfo from "../store/isEdit";

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
    return <div>로딩중이거나 로딩된 페이지가 없습니다.</div>;
  }
  return (
    <div>
      <PostList postData={post} />
      <PageNavigation postData={post} />
    </div>
  );
}

export default Main;
