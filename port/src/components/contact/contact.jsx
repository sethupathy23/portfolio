import React from 'react'
import './contact.css'
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

const Contact = () => {
  return (
    <div className="c">
     <div className="c-left">
     <div className="c-line"></div>
        <h1 className='A'>Address</h1>
        
        <div className="a-d">
        <HomeIcon className='h-i'  sx={{ fontSize: 50 }}  />
         
         <h3 className='A-a'>S.sethupathy,<br />R.V Namgar Nadiymman kovil street <br /> pattukkottai,<br /> thanjavur district, <br /> tamilnadu,<br /> India <br /> pincode-614601</h3>
       </div>
       <div className="a-d">
       <PhoneIcon className='h-i'  sx={{ fontSize: 50 }}  />
        
         <h3 className='p'>+91 8526269692</h3>
       </div>
       <div className="a-d">
       <MailIcon className='h-i'  sx={{ fontSize: 50 }}  />

         <h3 className='m'>sethupathy06@gmail.com</h3>
       </div>
      
     </div>
     <div className="c-right">right
     <p className='c-desc'><h2>Contact With Me</h2> </p>
     <form action="">
        <input type="text"  placeholder='Name' name="user_name" id="" />
        <input type="text"  placeholder='Subject' name="user_subject" id="" />
        <input type="text"  placeholder='email' name="user_email" id="" />
        <textarea placeholder='Message' rows="5" name="message"></textarea><br />
         <button>Submit</button>
     </form>
     </div>

    </div>

    
  )
}

export default Contact