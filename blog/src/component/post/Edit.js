import classes from "./Edit.module.css";
import { useContext, useRef } from "react";
import EditInfo from "../store/isEdit";
import axios from "axios";

function Edit(props) {
  const editContext = useContext(EditInfo);
  const editTitle = useRef();
  const editText = useRef();

  function editBtn(event) {
    event.stopPropagation();
    const enterTitle = editTitle.current.value;
    const enterText = editText.current.value;
    axios
      .put(`https://myblog-jhg-default-rtdb.firebaseio.com/post/${editContext.postId}.json`, {
        title: enterTitle,
        text: enterText,
      })
      .then(() => editContext.exitEdit());
  }

  function cancelBtn(event) {
    editContext.exitEdit();
  }

  return (
    <div>
      <div className={classes.background} onClick={cancelBtn} />

      <form name="3" className={classes.editForm}>
        <div className={classes.editBox}>
          <textarea id="title" cols="30" rows="1" spellCheck="false" ref={editTitle}>
            {editContext.postData.title}
          </textarea>
        </div>

        <div className={classes.editBox}>
          <textarea id="text" cols="30" ref={editText} rows="10" spellCheck="false">
            {editContext.postData.text}
          </textarea>
        </div>

        <div className={classes.editBtnBox}>
          <input type="button" value="수정" onClick={editBtn} />
          <input type="button" value="취소" onClick={cancelBtn} />
        </div>
      </form>
    </div>
  );
}

export default Edit;
