import { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authActive, setAuthActive] = useState("login");
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">KnowledgePulse</div>

      {/* Menu */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
      <li onClick={() => setMenuOpen(false)}>
    <NavLink to="/">HOME</NavLink>
  </li>

  <li onClick={() => setMenuOpen(false)}>
    <NavLink to="/courses">COURSES</NavLink>
  </li>

  <li onClick={() => setMenuOpen(false)}>
    <NavLink to="/learning-hub">LEARNING HUB</NavLink>
  </li>

  <li onClick={() => setMenuOpen(false)}>
    <NavLink to="/webinar">WEBINARS</NavLink>
  </li>

        {/* Mobile Auth */}
        <div className="mobile-buttons">
          <div className="auth-toggle">
          <button
      className={`auth-btn1 ${authActive === "login" ? "active" : ""}`}
      onClick={() => {
        setAuthActive("login");
        navigate("/login");
      }}
    >
      Log in
    </button>

    <button
      className={`auth-btn1 ${authActive === "register" ? "active" : ""}`}
      onClick={() => {
        setAuthActive("register");
        navigate("/register");
      }}
    >
      Register
    </button>
          </div>
        </div>
      </ul>

      {/* Desktop Auth */}
      <div className="navbar-buttons">
        <div className="auth-toggle">
        <button
      className={`auth-btn1 ${authActive === "login" ? "active" : ""}`}
      onClick={() => {
        setAuthActive("login");
        navigate("/login");
      }}
    >
      Log in
    </button>

    <button
      className={`auth-btn1 ${authActive === "register" ? "active" : ""}`}
      onClick={() => {
        setAuthActive("register");
        navigate("/register");
      }}
    >
      Register
    </button>
        </div>
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
