import React from 'react'
import './about.css'
import Ma from "../../images/pexels-ann-poan-5797903.jpg"


function About() {
  return (
    <div className='a'>
        <div className="a-left">
        <div className="a-card bg"></div>

            <div className="a-card">
                <img src={Ma} alt="" className='a-img' />
            </div>
        </div>
        <div className="a-right">
            <h1 className='a-title'>About Me</h1>
            <p className='a-sub'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, ducimus.
            </p>
            
            <p className='a-desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo recusandae, placeat quisquam neque, nihil accusamus provident iure, debitis distinctio quia beatae eligendi tenetur omnis! Perferendis pariatur est recusandae quo delectus illum. Eius accusamus corrupti nam ratione fuga autem voluptates quod rerum, at, ipsum quis laboriosam ipsam quae aliquid ipsa iste.
            </p>
            
        </div>
    </div>
  )
}

export default About