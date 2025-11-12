// src/components/Navbar.js
import { useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../utils/authContext";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();
  const isHomePage = location.pathname === "/";

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="pca2.png" alt="PCA Logo" className="logo-image" />
      </div>
      <ul className="navbar-links">
        {isHomePage ? (
          <>
            <li><ScrollLink to="home" smooth={true} duration={800} offset={-80}>Home</ScrollLink></li>
            <li><ScrollLink to="about" smooth={true} duration={800} offset={-80}>About</ScrollLink></li>
            <li><ScrollLink to="clientlogo" smooth={true} duration={800} offset={-80}>Clients</ScrollLink></li>
            <li><ScrollLink to="stepbystep" smooth={true} duration={800} offset={-80}>How It Works</ScrollLink></li>
            <li><ScrollLink to="contact-us" smooth={true} duration={800} offset={-80}>Contact Us</ScrollLink></li>
          </>
        ) : (
          <>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/">About</RouterLink></li>
            <li><RouterLink to="/">Contact Us</RouterLink></li>
          </>
        )}
        <li><RouterLink to="/marketnav">Market</RouterLink></li>
      </ul>
      <div className="navbar-auth">
        {isAuthenticated ? (
          <>
            <span className="user-greeting">Welcome, {user?.name || 'User'}</span>
            <button onClick={handleLogout} className="signup-btn">Logout</button>
          </>
        ) : (
          <>
            <RouterLink to="/login" className="signin-btn">Sign In</RouterLink>
            <RouterLink to="/signup" className="signup-btn">Sign Up</RouterLink>
          </>
        )}
      </div>
    </nav>
  );  
};

export default Navbar;