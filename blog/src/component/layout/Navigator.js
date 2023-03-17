import classes from "./navigator.module.css";
import { Link } from "react-router-dom";
import UserLoginInfo from "../store/isLogin";
import { useContext } from "react";

function Navigator() {
  const userLoginContext = useContext(UserLoginInfo);
  const isLogin = userLoginContext.LoginInfo;
  let content;
  if (isLogin) {
    content = <Link to="/blog/user">Write</Link>;
  } else {
    content = <Link to="/user">Login</Link>;
  }

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.navUl}>
          <li>
            <Link to="/blog">Main</Link>
          </li>
          <li>
            <p>{content}</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigator;
