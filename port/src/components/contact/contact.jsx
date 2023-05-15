import React from 'react'
import './contact.css'
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
 
const Contact = () => {
  return (
    <div className="c">
     <div className ="contact">
      <h4 className="G">Get in Touch</h4>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
        <EmailIcon></EmailIcon>
          <p><a href="mailto:sethupathy06@gmail.com">Mail</a></p>
        </div>
        <div className="contact-info-container">
        <LinkedInIcon></LinkedInIcon>
          
          <p><a href="https://www.linkedin.com/in/sethupathy-s-421375271/">LinkedIn</a></p>
        </div>
        <div className="contact-info-container">
        <GitHubIcon></GitHubIcon>
          
          <p><a href="https://github.com/sethupathy23">GitHub</a></p>
        </div>
    </div>
      
    <footer className='foo'>
      <nav> 
        <div className='copy'>  <p>Copyright &#169; 2023 sethupathy. All Rights Reserved.</p> </div>
        </nav>
     
   
    </footer>

    </div>
    </div>
  )
}

export default Contact