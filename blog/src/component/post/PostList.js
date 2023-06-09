import classes from "./PostList.module.css";
import Post from "./Post";
import Edit from "./Edit";
import EditInfo from "../contexts/EditContext";
import { useContext } from "react";

function PostList(props) {
  const editContext = useContext(EditInfo);
  const openEditStatus = editContext.isOpen;

  return (
    <ul className={classes.postList}>
      {openEditStatus && <Edit />}
      {props.postData.map((post) => (
        <Post key={post.id} postList={props} id={post.id} title={post.title} text={post.text} />
      ))}
    </ul>
  );
}

export default PostList;
