import React from "react";
import "./about.css";
import Ma from "../../images/pexels-ann-poan-5797903.jpg";

function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>

        <div className="a-card">
          <img src={Ma} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Hi Everyone, I am <strong className="tamil">sethupathy </strong> From
          <strong className="tamil"> Tamilnadu, India.</strong> <br />I have
          Completed 6-month intensive
          <strong className="tamil"> MERN Stack</strong> development course from{" "}
          <strong className="tamil">GUVI IIT Madras</strong> and Gaining hands
          on projects and experience with technologies such as React
          Js,MongoDB,Express and Node JS. My goal is contribute to work with
          projects.
          <div></div>
        </p>
      </div>
    </div>
  );
}

export default About;
