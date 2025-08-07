import { useState } from "react";
import axios from "axios";
import Header from "../components/header.js";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/login", {
        username: form.username,
        password: form.password,
      });

      alert("Login successful!");
      navigate("/home"); // Redirect to home page
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <Header />
      <div className="container center">
        <div className="login-box">
          <h1 className="brand">Login</h1>
          <form className="center login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
            />
            <button type="submit">Login</button>
            <p className="note">
              Don’t have an account? <a href="/register">Register</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
