import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserLoginInfoProvider } from "./component/contexts/UserLoginContext";
import { EditContextProvider } from "./component/contexts/EditContext";
import { PostContextProvider } from "./component/contexts/PostContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserLoginInfoProvider>
    <EditContextProvider>
      <PostContextProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <App />
        </BrowserRouter>
      </PostContextProvider>
    </EditContextProvider>
  </UserLoginInfoProvider>
);
