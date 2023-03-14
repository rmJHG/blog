import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import UserLoginInfo from "../store/isLogin";
import Edit from "./Edit";
import EditInfo from "../store/isEdit";

import classes from "./Post.module.css";

function Post(props) {
  // const loadTitle = props.title;
  // const loadText = props.Text;
  const loadId = props.id;


  const nav = useNavigate();
  const userLoginContext = useContext(UserLoginInfo);
  const isLogin = userLoginContext.LoginInfo;
  const editContext = useContext(EditInfo);
  const openEditStatus = editContext.isOpen;

  function editBtn() {
    console.log(props.id);
    editContext.openEdit();
  }

  function delBtn() {
    const postId = props.id;
    axios.delete(`https://myblog-jhg-default-rtdb.firebaseio.com/post/${postId}.json`).then(() => {
      nav("/");
    });
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

          {openEditStatus && <Edit postId={loadId} />}
    </li>
  );
}

export default Post;
