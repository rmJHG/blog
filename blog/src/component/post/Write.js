import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

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
    }).then((res) => nav("/blog/"));
  }

  return (
    <section>
      <form name="form2" onSubmit={AddPost}>
        <div>
          <label htmlFor="title">제목</label>
          <input type="text" id="title" ref={inputTitle} />
        </div>
        <div>
          <label htmlFor="text">내용</label>
          <input type="text" id="text" ref={inputText} />
        </div>
        <div>
          <button>포스트</button>
        </div>
      </form>
    </section>
  );
}

export default Write;
