import { useState, createContext } from "react";

const PostContext = createContext({});

export function PostContextProvider(props) {
  const [postData, setPostData] = useState([]);
  
  // 게시글 데이터 가져오기
  function getPostData(data) {
    setPostData(data);
    // console.log("get data", data)
  }

  const PostContextData = {
    getPostData: getPostData,
    postData: postData,
  };

  return <PostContext.Provider value={PostContextData}>{props.children}</PostContext.Provider>;
}

// export default PostContext;
