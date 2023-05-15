
import React from 'react'
import './intro.css';
import Me from "../../images/My project.png"

import { Typewriter } from 'react-simple-typewriter'

const Intro = () => {
  return (
    <div className='i'>
        <div className="i-left">

            <div className="i-left-wrapper">
                <h2 className="i-intro">
                      Hello, My name is
                </h2>
                <h1 className="i-name">
                    Sethupathy
                </h1>
                <div className="i-title">
                    <div className="i-title-wraper">
                      
                        <div className="i-title-item">Web Developer | MERN Stack</div>
                        <div className="i-title-item">MERN Stack</div>
                        <div className="i-title-item">Full Stack Developer</div>
                        <div className="i-title-item">Full Stack Developer</div>
                     </div>
                </div>
                <div className="i-desc">
                    Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Aspernatur deleniti
                     explicabo quod consequatur! Aliquid
                      voluptatum asperiores ipsa ducimus
                       officia id?
                </div>
            </div>

        </div>

        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Me} alt="" className="i-img" />
       
        </div>

    </div>
  )
}

export default Intro