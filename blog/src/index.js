import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserLoginInfoProvider } from "./component/store/isLogin";
import { EditContextProvider } from "./component/store/isEdit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserLoginInfoProvider>
    <EditContextProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </EditContextProvider>
  </UserLoginInfoProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
