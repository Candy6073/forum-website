import { Routes, Route } from "react-router-dom";
import Forum from "./components/forum.js";
import Posts from "./components/post.js";
import Detail from "./components/detail.js";
import Login from "./components/login.js";
import Register from "./components/register.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Forum />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
