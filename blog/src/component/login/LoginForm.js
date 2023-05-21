import axios from "axios";
import { useRef, useContext, useState } from "react";
import UserLoginInfo from "../store/isLogin";
import classes from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [loginError, setLoginError] = useState(false);
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


  //로그인 버튼 클릭
  function onSubmitLogin(event) {
    event.preventDefault();
    const enterUserName = inputUserName.current.value;
    const enterUserPassword = inputUserPassword.current.value;

    if (userData.id === enterUserName && String(userData.password) === enterUserPassword) {
      userLoginContext.online();
      confirmNav("/");
    } else {
      setLoginError(true);
    }
  }

  return (
    <section className={classes.loginBox}>
      <form name="form1" onSubmit={onSubmitLogin} className={classes.loginForm}>
        {loginError && (
          <div className={classes.loginErrorBox}>
            <p>아이디 또는 비밀번호를 잘못 입력하셨거나 등록되지 않은 아이디입니다.</p>
          </div>
        )}
        <div className={classes.loginInputBox}>
          <input type="text" required ref={inputUserName} placeholder="아이디" />
        </div>

        <div className={classes.loginInputBox}>
          <input type="password" required ref={inputUserPassword} placeholder="비밀번호" />
        </div>

        <div className={classes.loginInputBox}>
          <button>로그인</button>
        </div>
      </form>
    </section>
  );
}

export default LoginForm;
