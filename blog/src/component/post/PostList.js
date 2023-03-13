import classes from "./PostList.module.css";
import Post from "./Post";

function PostList(props) {
  return (
    <ul className={classes.postList}>
      {props.postData.map((post) => (
        <Post id={post.id} title={post.title} text={post.text} />
      ))}
    </ul>
  );
}

export default PostList;
