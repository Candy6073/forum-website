import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  return (
    <div className="nav-container">
      {/* Hamburger icon - visible on mobile */}
      <div className="bar-icon" onClick={toggleNavbar}>
        <i className="fa fa-bars"></i>
      </div>

      {/* Navbar links */}
      <nav className={`navigation ${open ? "show" : "hide"}`}>
        <span className="close-icon" onClick={toggleNavbar}>
          <i className="fa fa-close"></i>
        </span>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" onClick={toggleNavbar}>Forums</Link>
          </li>
          <li className="nav-item">
            <Link to="/posts" onClick={toggleNavbar}>Posts</Link>
          </li>
          <li className="nav-item">
            <Link to="/detail" onClick={toggleNavbar}>Detail</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" onClick={toggleNavbar}>Login</Link> {/* Add Login link */}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
