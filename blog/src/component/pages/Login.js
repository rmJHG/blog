import LoginForm from "../login/LoginForm";
import Write from "../post/Write";
import { useContext } from "react";
import UserLoginInfo from "../store/isLogin";

function Login() {
  const userLoginContext = useContext(UserLoginInfo);
  const isLogin = userLoginContext.LoginInfo;
  let content;

  if (isLogin) {
    content = <Write />;
  } else {
    content = <LoginForm />;
  }

  return <div>{content}</div>;
}

export default Login;
