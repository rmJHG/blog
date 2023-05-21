import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./component/pages/Main";
import Login from "./component/pages/Login";
import Write from "./component/post/Write";
import Layout from "./component/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user" element={<Login />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </Layout>
  );
}

export default App;
