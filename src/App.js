import { Routes, Route } from "react-router-dom";
import Forum from "./components/forum.js";
import Posts from "./components/post.js";
import Detail from "./components/detail.js";
import Login from "./components/login.js"; // Import the Login component

function App() {
  return (
    <Routes>
      <Route path="/" element={<Forum />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/login" element={<Login />} /> {/* Add the login route */}
    </Routes>
  );
}

export default App;
