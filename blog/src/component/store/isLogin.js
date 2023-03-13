import { createContext, useState } from "react";

const UserLoginInfo = createContext({
  LoginInfo: false,
  online: () => {},
  offline: () => {},
});

export function UserLoginInfoProvider(props) {
  const [isLogin, setIsLogin] = useState(false);
  function userOnline() {
    setIsLogin(true)
  }

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
