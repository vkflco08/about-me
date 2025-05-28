import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ProjectJudo from "./components/ProjectJudo";
import ProjectSoulmate from "./components/ProjectSoulmate";
import ProjectSequence from "./components/ProjectSequence";
import ProjectGranulation from "./components/ProjectGranulation";
import ProjectMemo from "./components/ProjectMemo"
import ProjectTaskpilot from "./components/ProjectTaskpilot"
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/judo" element={<ProjectJudo />} />
        <Route path="/project/soulmate" element={<ProjectSoulmate />} />
        <Route path="/project/sequence" element={<ProjectSequence />} />
        <Route path="/project/granulation" element={<ProjectGranulation />} />
        <Route path="/project/memo" element={<ProjectMemo />} />
        <Route path="/project/taskpilot" element={<ProjectTaskpilot />} />
      </Routes>
    </Router>
  );
}

export default App;
