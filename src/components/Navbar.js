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
        <a href="https://www.careerguide.com/career/career-counselling-services-for-masters-2">
          Students
        </a>
        <a href="https://www.careerguide.com/career/counsellor">Counsellors</a>
        <a href="https://www.careerguide.com/career/career-counselling-services-for-working-professionals">
          Professionals
        </a>
        <a href="https://www.careerguide.com/psychometric-career-assessment">
          Psychometric Test
        </a>
        <a href="https://www.careerguide.com/">Insitute</a>
        <a href="https://www.careerguide.com/pricing">Pricing</a>
      </div>
      <div className="signin">
        <a href="https://www.careerguide.com/login">Sign In</a>
      </div>
    </div>
  );
}

export default Navbar;
