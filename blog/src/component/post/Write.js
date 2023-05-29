import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Write.module.css";
import { useEffect } from "react";
import { useContext } from "react";
import UserLoginInfo from "../contexts/UserLoginContext";

function Write() {
  const nav = useNavigate();
  const inputTitle = useRef();
  const inputText = useRef();
  const userLoginContext = useContext(UserLoginInfo);
  const isLogin = userLoginContext.LoginInfo;




  //쓴 글 firebase에 post하기
  function AddPost(event) {
    event.preventDefault();
    const enterTitle = inputTitle.current.value;
    const enterText = inputText.current.value;
    const date = new Date()

    axios("https://myblog-jhg-default-rtdb.firebaseio.com/post.json", {
      method: "POST",
      data: {
        title: enterTitle,
        text: enterText,
        date: date,
      },
      header: {
        "Content-Type": "application/json",
      },
    }).then((res) => nav("/"));
  }

  useEffect(() => {
    if (!isLogin) {
      nav("/");
    }
  });

  return (
    <section className={classes.writeBox}>
      <form name="form2" onSubmit={AddPost} className={classes.form}>
        <div className={classes.title}>
          <input type="text" id="title" ref={inputTitle} placeholder="제목" maxLength="30" />
        </div>

        <div className={classes.text}>
          <textarea placeholder="내용" name="" id="" cols="30" rows="10" spellCheck="false" ref={inputText}></textarea>
        </div>

        <div className={classes.btn}>
          <button>글쓰기</button>
        </div>
      </form>
    </section>
  );
}

export default Write;
