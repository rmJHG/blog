// function PageBoard(props) {
//   return <div>{props.title}</div>;
// }

// export default PageBoard;
import classes from "./PageBoard.module.css";

const PageBoard = (props) => {
  console.log(props)
  return (
    <div className={classes.pageBoard}>
      <div>{props.title}</div>

      <div>{props.date}</div>
    </div>
  );
};

export default PageBoard;
