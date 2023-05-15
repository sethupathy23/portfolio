import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Intro from './components/intro/intro'
import About from './components/about/About'
import Qualification from './components/qualification/qualification'
import ProjectList from './components/project list/projectlist'
import Contact from './components/contact/contact'
import Navbar from './components/Navbar/navbar'
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
 
const navigate = useNavigate();
  return (
    <div className="App">
      {/* <Navbar /> */}
      
      {/* <About />
      <Qualification />
      <ProjectList />
      <Contact /> */}
     
      <AppBar position="static">
        <Toolbar>
          <Button onClick = {() => navigate ("/")} color="inherit">Home</Button>
          <Button onClick = {() => navigate ("/about")} color="inherit">About</Button>
          <Button onClick = {() => navigate ("/qualification")} color="inherit">Qualification</Button>
          <Button onClick = {() => navigate ("/project")} color="inherit">Project</Button>
          <Button onClick = {() => navigate ("/contact")} color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
 
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/qualification" element={<Qualification />} />
        <Route path="/projectlist" element={<ProjectList />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
