import axios from "axios";
import { useRef, useContext } from "react";
import UserLoginInfo from "../store/isLogin";
import classes from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const userLoginContext = useContext(UserLoginInfo);
  const confirmNav = useNavigate();
  let userData = {
    id: "",
    password: "",
  };

  axios.get("https://myblog-jhg-default-rtdb.firebaseio.com/id.json").then((res) => {
    userData = {
      id: res.data.id,
      password: res.data.password,
    };
  });


  const inputUserName = useRef();
  const inputUserPassword = useRef();

  function onSubmitLogin(event) {
    event.preventDefault();
    const enterUserName = inputUserName.current.value;
    const enterUserPassword = inputUserPassword.current.value;

    if (userData.id === enterUserName && String(userData.password) === enterUserPassword) {
      userLoginContext.online();
      confirmNav("/");
    }
  }

  
  return (
    <section className={classes.loginBox}>
      <form name="form1" onSubmit={onSubmitLogin}>
        <div className={classes.loginInputBox}>
          <label htmlFor="userName">아이디</label>
          <input type="text" required id="userName" ref={inputUserName} />
        </div>
        <div className={classes.loginInputBox}>
          <label htmlFor="userPassword">비밀번호</label>
          <input type="password" required id="userPassword" ref={inputUserPassword} />
        </div>
        <div>
          <button>로그인</button>
        </div>
      </form>
    </section>
  );
}

export default LoginForm;
