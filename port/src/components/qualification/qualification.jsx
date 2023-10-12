import React from 'react'
import{Timeline,TimelineItem,TimelineSeparator,TimelineConnector,TimelineContent,TimelineDot} from '@mui/lab'
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';
import './qualification.css'
import Ma1 from "../../images/html5.png"
import Ma2 from "../../images/css.png"
import Ma3 from "../../images/JS.png"
import Ma4 from "../../images/R.png"

import Ma5 from "../../images/m.png"
import Ma6 from "../../images/n.png"
// import Ma7 from "../../images/MongoDB1.png"
import Ma7 from "../../images/e.png"
import Ma8 from "../../images/SQL2.png"
import Ma9 from "../../images/g.png"

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

const Qualification = () => {
  return (
    <div className='q'>
        <h1 className='head'></h1>
    <div className="e-left"> 
    <h1>Education Qualification</h1>
    <div className="e-line">
       
    <Timeline position="alternate">
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="secondary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent><h4> Annamalai university</h4><br />
            <h5>Bachelor of Civil Engineering</h5> <br />
            <h5>percentage - 63%</h5> <br />
          </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="success" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent><h4>Laurel Higher Secondary School</h4><br />
            <h5 className='higher'>Higher Secondary</h5><br />
          <h5>percentage - 63%</h5><br />
           </TimelineContent>
    </TimelineItem>
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="secondary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent><h4> Laurel Higher Secondary School</h4><br />
            <h5>Secondary School</h5><br />
      
         
           <h5>percentage - 76%</h5><br />
            </TimelineContent>
    </TimelineItem>
    
  </Timeline>
  
  <br />
  </div>
  </div>
  <div className="e-right"><h1>Skills and Tools</h1>
  <div className="i-logo">
  <img src={Ma1} alt="html logo" className='h-logo' />
  
  <img src={Ma2} alt="css logo" className='c-logo' />
  <img src={Ma3} alt="JS logo" className='j-logo'/>
  <img src={Ma4} alt="React logo" className='r-logo' />
  <img src={Ma5} alt="SQL logo"  className='s-logo'/>
  <img src={Ma6} alt="Node logo" className='n-logo' />
  {/* <img src={Ma7} alt="SQL logo" /> */}
  <img src={Ma7} alt="express logo"  className='e-logo'/>
  <img src={Ma8} alt="SQL logo" className='s-logo' />
  <img src={Ma9} alt="github logo" className='g-logo' />
 
  </div>

    <div className="e-skill">

    </div>

  </div>
  </div>
  )
};

export default Qualification