import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../themeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <div className="mode-switch">
        <label>
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;