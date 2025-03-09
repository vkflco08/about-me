// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import './App.css';
// import AboutMe from './components/AboutMe';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Career from './components/Career';
// import ProjectSoulmate from './components/ProjectSoulmate';
// import ProjectJudo from './components/ProjectJudo';

// const projects = [
//   {
//     id: 0,
//     name: "룸메이트 매칭 서비스",
//     period: "2024. 03 ~ 2024. 06 (4개월)",
//     teamMembers: 2,
//     description: "Spring Boot 기반의 온라인 룸메이트 매칭 서비스 \n 사용자는 선호도를 입력하여 룸메이트를 구할 수 있고, 채팅방을 이용하여 다른 사용자와 소통 가능",
//     techStack: {
//       languages: ["Kotlin", "Spring Boot"],
//       database: ["MySQL"],
//     }
//   },
//   {
//     id: 1,
//     name: "JUDO",
//     period: "2024. 10 ~ 2024. 12 (3개월)",
//     teamMembers: "2 (개발인원 1명)",
//     description: "2030을 대상으로 하는 주류 추천 서비스",
//     techStack: {
//       languages: ["Kotlin", "Spring Boot"],
//       database: ["MySQL"],
//     }
//   }
// ];

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* 네비게이션 바 */}
//         <nav className="Nav">
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/#about-me">About Me</Link></li>
//             <li><Link to="/#skills">Skills</Link></li>
//             <li><Link to="/#projects">Projects</Link></li>
//             <li><Link to="/#career">Career</Link></li>
//           </ul>
//         </nav>

//         {/* Route 설정 */}
//         <Routes>
//           {/* 메인 페이지 */}
//           <Route path="/" element={
//             <>
//               <AboutMe />
//               <Skills />
//               <Projects projects={projects} />
//               <Career />
//             </>
//           } />

//           {/* 프로젝트 상세 페이지 */}
//           <Route path="/project/soulmate" element={<ProjectSoulmate />} />
//           <Route path="/project/judo" element={<ProjectJudo />} />
//         </Routes>

//         {/* 푸터 */}
//         <footer className="Footer">
//           <p>&copy; 2025 Developer Portfolio. All rights reserved.</p>
//         </footer>
//       </div>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ProjectJudo from "./components/ProjectJudo";
import ProjectSoulmate from "./components/ProjectSoulmate";
import ProjectSequence from "./components/ProjectSequence";
import ProjectGranulation from "./components/ProjectGranulation";
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
      </Routes>
    </Router>
  );
}

export default App;


