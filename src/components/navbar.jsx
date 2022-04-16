import React from "react";

// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="/" className="navbar-brand">
        NavBar <span className="badge bg-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
