import Header from "../components/header.js";


function Login() {
    return (<>
     
      <div className="container center">
        <div className="login-box">
          <h1 className="brand">Login</h1>
          <form className="center login-form">
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
            <p className="note">
              Don’t have an account? <a href="#">Register</a>
            </p>
          </form>
        </div>
      </div>
       <Header />
      </>
    );
  }
  
  export default Login;
  