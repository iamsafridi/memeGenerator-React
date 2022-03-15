import React from "react";
import Logo from "../troll-face.png";

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="troll face" className="header-img" />
      <h1 className="header-title">MemeGenerator</h1>
    </div>
  );
}

export default Header;
