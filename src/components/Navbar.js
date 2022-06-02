import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="Title">
        <img
          src="https://indiaeducationdiary.in/wp-content/uploads/2021/09/CareerGuide-high.png"
          alt=""
        />
      </div>
      <div className="options">
        <a>Students</a>
        <a>Counsellors</a>
        <a>Professionals</a>
        <a>Psychometric Test</a>
        <a>Insitute</a>
        <a>Pricing</a>
      </div>
      <div className="signin">
        <a>Sign In</a>
      </div>
    </div>
  );
}

export default Navbar;
