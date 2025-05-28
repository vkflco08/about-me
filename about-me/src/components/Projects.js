import { Link } from "react-router-dom";

const projects = [
  {
    id: 5,
    name: "TaskPilot",
    route: "taskpilot",
    period: "2025. 05 ~ 현재",
    description: "프로젝트 관리 도구",
  },
  {
    id: 6,
    name: "Sequence",
    route: "sequence",
    period: "2024. 11 ~ 현재",
    description: "대학 간 PM / 디자이너 / 개발자 교류 서비스",
  },
  {
    id: 7,
    name: "ㅈㅇㄴㄹ",
    route: "memo",
    period: "2024. 9 ~ 현재",
    description: "내가 직접 만드는 개인 메모장",
  },
  {
    id: 8,
    name: "!육아",
    route: "granulation",
    period: "2024. 7 ~ 2024. 8 (2개월)",
    description: "신생아 부모님들을 위한 커뮤니티 및 정보 공유 플랫폼",
  },
  {
    id: 9,
    name: "JUDO",
    route: "judo",
    period: "2024. 10 ~ 2024. 12 (3개월)",
    description: "2030을 대상으로 하는 주류 추천 서비스",
  },
  {
    id: 10,
    name: "Soulmate",
    route: "soulmate",
    period: "2024. 03 ~ 2024. 06 (4개월)",
    description: "온라인 기숙사 룸메이트 매칭 서비스",
  }
];

function Projects() {
  return (
    <section id="skills" className="Section skills">
      <h2>Projects</h2>
      <div className="Project-list">
        {projects.map((project) => (
          <div key={project.id} className="Project-card">
            <h3>{project.name}</h3>
            <p>{project.period}</p>
            <p>{project.description}</p>
            <Link to={`/project/${project.route}`}>
              <button>Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
