import Intro from "./components/intro/intro";
import About from "./components/about/About";
import Qualification from "./components/qualification/qualification";
import ProjectList from "./components/project list/projectlist";
import Contact from "./components/contact/contact";
import { Routes, Route, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

function App() {
  const navigate = useNavigate();

  const bgStyles = {
    borderRadius: "0px",
    minHeight: "100vh",
  };

  return (
    <div>
      <Paper sx={bgStyles} elevation={4}>
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Button onClick={() => navigate("/")} color="inherit">
                  portfolio
                </Button>
              </Typography>
              <div className="nav-btn">
                <Button onClick={() => navigate("/")} color="inherit">
                  Home
                </Button>
                <Button onClick={() => navigate("/about")} color="inherit">
                  About
                </Button>
                <Button
                  onClick={() => navigate("/Qualification")}
                  color="inherit"
                >
                  Qualification
                </Button>
                <Button
                  onClick={() => navigate("/ProjectList")}
                  color="inherit"
                >
                  Project
                </Button>
                <Button onClick={() => navigate("/Contact")} color="inherit">
                  Contact
                </Button>
              </div>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/about" element={<About />} />
            <Route path="/Qualification" element={<Qualification />} />
            <Route path="/ProjectList" element={<ProjectList />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </Paper>
    </div>
  );
}

export default App;
