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
