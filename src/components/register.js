import Header from "../components/header.js";

function Register() {
  return (
    <>
      <Header />
      <div className="container center">
        <div className="login-box">
          <h1 className="brand">Register</h1>
          <form className="center login-form">
            <input type="text" placeholder="Username" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Register</button>
            <p className="note">
              Already have an account? <a href="/login">Login</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
