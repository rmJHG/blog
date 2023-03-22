import { useContext } from "react";
import axios from "axios";

import UserLoginInfo from "../store/isLogin";
import Edit from "./Edit";
import EditInfo from "../store/isEdit";
import classes from "./Post.module.css";

function Post(props) {
  const userLoginContext = useContext(UserLoginInfo);
  const isLogin = userLoginContext.LoginInfo;
  const editContext = useContext(EditInfo);
  const openEditStatus = editContext.isOpen;

  function editBtn() {
    editContext.openEdit(props);
  }

  function delBtn() {
    axios.delete(`https://myblog-jhg-default-rtdb.firebaseio.com/post/${props.id}.json`).then(() => editContext.refresh());
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

      {openEditStatus && <Edit />}
    </li>
  );
}

export default Post;
