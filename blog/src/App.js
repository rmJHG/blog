import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./component/pages/Main";
import Login from "./component/pages/Login";

import Layout from "./component/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/blog/" element={<Main />} />
        <Route path="/blog/helllllo" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;
