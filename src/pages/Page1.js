import React from "react";
import "./Page1.css";
import s1 from "../assets/s1.png";
import OrangeButton from "../components/OrangeButton";

function Page1() {
  return (
    <div className="page">
      <div className="content">
        <h3>your</h3>
        <h1>
          IDEAL
          <br /> CAREER
        </h1>
        <h3> is waiting for you</h3>
        <p>
          Suitable for person of any age gorup, this text will help you
          <br /> to identify and explore suitable career option in order to get
          <br />
          in career search or change <br />{" "}
          <b>
            Stop being lost and confused. Know you values, learn about yourself,
            Identify your skilld and find the perfect career for you/{" "}
          </b>
        </p>
        <OrangeButton />
      </div>
      <div className="image">
        <img src={s1} alt="" />
      </div>
    </div>
  );
}

export default Page1;
