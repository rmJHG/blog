import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Write.module.css";

function Write() {
  const nav = useNavigate();
  const inputTitle = useRef();
  const inputText = useRef();

  function AddPost(event) {
    event.preventDefault();
    const enterTitle = inputTitle.current.value;
    const enterText = inputText.current.value;

    axios("https://myblog-jhg-default-rtdb.firebaseio.com/post.json", {
      method: "POST",
      data: {
        title: enterTitle,
        text: enterText,
      },
      header: {
        "Content-Type": "application/json",
      },
    }).then((res) => nav("/"));
  }

  return (
    <section className={classes.writeBox}>
      <form name="form2" onSubmit={AddPost} className={classes.form}>
        <div className={classes.title}>
          {/* <label htmlFor="title">제목</label> */}
          <input type="text" id="title" ref={inputTitle} placeholder="제목" />
        </div>

        <div className={classes.text}>
          {/* <label htmlFor="text">내용</label> */}
        <textarea placeholder="내용" name="" id="" cols="30" rows="10" ref={inputText}></textarea>
          {/* <input type="textarea" id="text" ref={inputText} placeholder="내용"/> */}
        </div>

        <div className={classes.btn}>
          <button>글쓰기</button>
        </div>
      </form>
    </section>
  );
}

export default Write;