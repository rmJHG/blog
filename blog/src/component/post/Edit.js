import classes from "./Edit.module.css";
import { useContext, useRef } from "react";
import EditInfo from "../store/isEdit";
import axios from "axios";

function Edit(props) {
  const editContext = useContext(EditInfo);
  const editTitle = useRef();
  const editText = useRef();

  function editBtn() {
    const enterTitle = editTitle.current.value;
    const enterText = editText.current.value;
    axios
      .put(`https://myblog-jhg-default-rtdb.firebaseio.com/post/${editContext.postId}.json`, {
        title: enterTitle,
        text: enterText,
      })
      .then(() => editContext.exitEdit());
  }

  function cancelBtn() {
    editContext.exitEdit();
  }

  return (
    <div className={classes.background} onClick={cancelBtn}>
      <form name="3" className={classes.editForm}>
        <div>
          <input type="text" id="title" ref={editTitle} value={editContext.postData.title}/>
        </div>

        <div>
          {/* <label htmlFor="text"> 내용</label> */}
          {/* <input type="text" id="text" r value=/> */}
          <textarea id="text" cols="30" ref={editText} rows="10">{editContext.postData.text}</textarea>
        </div>

        <div>
          <input type="button" value="수정" onClick={editBtn} />
          <input type="button" value="취소" onClick={cancelBtn} />
        </div>
      </form>
    </div>
  );
}

export default Edit;
