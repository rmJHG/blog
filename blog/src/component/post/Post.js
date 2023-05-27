import axios from "axios";
import { useContext } from "react";
import UserLoginInfo from "../contexts/UserLoginContext";
import EditInfo from "../contexts/EditContext";
import classes from "./Post.module.css";

function Post(props) {
  const userLoginContext = useContext(UserLoginInfo);
  const isLogin = userLoginContext.LoginInfo;
  const editContext = useContext(EditInfo);

  function editBtn() {
    editContext.openEdit(props);
  }

  function delBtn() {
    axios
      .delete(`https://myblog-jhg-default-rtdb.firebaseio.com/post/${props.id}.json`)
      .then(() => editContext.refresh());
  }

  return (
    <li className={classes.postBox}>
      <div className={classes.postHeader}>
        <h1 className={classes.postTitle}>{props.title}</h1>
        <div className={classes.postBtnBox}>
          {isLogin && (
            <button className={classes.postBtn} onClick={editBtn}>
              수정
            </button>
          )}
          {isLogin && (
            <button className={classes.postBtn} onClick={delBtn}>
              삭제
            </button>
          )}
        </div>
      </div>
      <p className={classes.postText}>{props.text}</p>
    </li>
  );
}

export default Post;
