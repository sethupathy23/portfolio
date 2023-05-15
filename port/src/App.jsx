import Intro from './components/intro/intro'
import About from './components/about/About'
import Qualification from './components/qualification/qualification'
import ProjectList from './components/project list/projectlist'
import Contact from './components/contact/contact'

import { Routes, Route, useNavigate } from "react-router-dom";

import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';

function App() {
 
const navigate = useNavigate();
  return (
    <div className="App">
      {/* <Navbar /> */}
      <AppBar position="static">
        <Toolbar>
          <Button onClick = {() => navigate ("/")} color="inherit">Home</Button>
          <Button onClick = {() => navigate ("/about")} color="inherit">About</Button>
          <Button onClick = {() => navigate ("/qualification")} color="inherit">Qualification</Button>
          <Button onClick = {() => navigate ("/project")} color="inherit">Project</Button>
          <Button onClick = {() => navigate ("/contact")} color="inherit">Contact</Button>
        </Toolbar>
      </AppBar> 
      <Intro />
      <About />
      <Qualification />
      <ProjectList />
      <Contact />
     
     
    
 
       {/* <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/qualification" element={<Qualification />} />
        <Route path="/projectlist" element={<ProjectList />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>  */}
    </div>
  )
}

export default App
