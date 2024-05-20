import React, { useState } from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <nav className="header__links">
        <p>Contact</p>
        <p>Project</p>
        <p>About</p>
      </nav>
    </div>
  );
}

export default Header;
