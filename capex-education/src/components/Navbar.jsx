import { useState, useRef, useEffect } from "react";

import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authActive, setAuthActive] = useState("login");

  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };
  
    const closeOnScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
  
    // 🔥 these are the key ones
    window.addEventListener("scroll", closeOnScroll, true);
    window.addEventListener("wheel", closeOnScroll, { passive: true });
    window.addEventListener("touchmove", closeOnScroll, { passive: true });
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
  
      window.removeEventListener("scroll", closeOnScroll, true);
      window.removeEventListener("wheel", closeOnScroll);
      window.removeEventListener("touchmove", closeOnScroll);
    };
  }, [menuOpen]);
  

  
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">KnowledgePulse</div>

      {/* Menu */}
      <ul  ref={menuRef} className={`navbar-links ${menuOpen ? "active" : ""}`}>
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
      <div ref={hamburgerRef}
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
