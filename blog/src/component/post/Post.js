import classes from "./Post.module.css";
import UserLoginInfo from "../store/isLogin";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Post(props) {
  const userLoginContext = useContext(UserLoginInfo);
  const isLogin = userLoginContext.LoginInfo;
  const nav = useNavigate();
  function editBtn() {}

  function delBtn() {
    const postId = props.id;
    console.log(postId);

    axios.delete(`https://myblog-jhg-default-rtdb.firebaseio.com/post/${postId}.json`).then(() => {
      nav("/");
    });
  }

  return (
  
    <li className={classes.postBox}>
      <div className={classes.postHeader}>
        <h1 className={classes.postTitle}>{props.title}</h1>
        <div className={classes.postBtnBox}>
        {isLogin && <button className={classes.postBtn} onClick={editBtn}>수정</button>}
        {isLogin && <button className={classes.postBtn} onClick={delBtn}>삭제</button>}
        </div>
      </div>
      <h3 className={classes.postText}>{props.text}</h3>
     </li>
      
    
  );
}

export default Post;
