import { createContext, useState } from "react";

const UserLoginInfo = createContext({
  LoginInfo: false,
  online: () => {},
  offline: () => {},
});

export function UserLoginInfoProvider(props) {
  const [isLogin, setIsLogin] = useState(false);

  //로그인 확인함수
  function userOnline() {
    setIsLogin(true);
  }
  //로그아웃 확인함수
  function userOffline() {
    setIsLogin(false);
  }
  const login = {
    LoginInfo: isLogin,
    online: userOnline,
    offline: userOffline,
  };
  return <UserLoginInfo.Provider value={login}>{props.children}</UserLoginInfo.Provider>;
}

export default UserLoginInfo;
