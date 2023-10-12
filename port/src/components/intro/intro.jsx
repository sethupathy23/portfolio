import React from "react";
import "./intro.css";
import Me from "../../images/My project.png";
import { Typewriter } from "react-simple-typewriter";
import About from "../about/About";
import Qualification from "../qualification/qualification";
import ProjectList from "../project list/projectlist";
import Contact from "../contact/contact";

const Intro = () => {
  return (
    <div>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, This is</h2>
            <h1 className="i-name">Sethupathy</h1>
            <div className="i-title">
              <div className="i-title-wraper">
                <div className="i-title-item">
                  Software Developer | MERN Stack
                </div>
                <div className="i-title-item">MERN Stack</div>
                <div className="i-title-item">Full Stack Developer</div>
                <div className="i-title-item">Full Stack Developer</div>
              </div>
            </div>
            <h3 className="i-intro1">
              Front End developer | Back End Developer | FullStack Developer
            </h3>
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src={Me} alt="" className="i-img" />
        </div>
      </div>
      <About />
      <Qualification />
      <ProjectList />
      <Contact />
    </div>
  );
};

export default Intro;
