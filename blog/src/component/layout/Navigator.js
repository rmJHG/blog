import classes from "./navigator.module.css";
import { Link } from "react-router-dom";
import UserLoginInfo from "../store/isLogin";
import { useContext } from "react";

function Navigator() {
  const userLoginContext = useContext(UserLoginInfo);
  const isLogin = userLoginContext.LoginInfo;

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.navUl}>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>{isLogin ? <Link to="/write">Write</Link> : <Link to="/user">Login</Link>}</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigator;
