// src/components/Career.js
function Career() {
  const careerData = [
    { company: "(주) 위븐", period: "2024.03 - 2024.11", description: "YJS 라이브러리를 활용한 실시간 협업 편집 기능 개발" },
    { company: "(주) 엠케이",period: "2023.10 - 2023.12", description: "AI 기반 자동차 정비소 홍보 콘텐츠 생성 프로그램 개발" },
    ];
  return (
    <section id="career" className="Section career">
      <h2>Career</h2>
      <h3>산학연계 프로젝트</h3>
      <div className="Career-list">
        {careerData.map((job, index) => (
          <div className="Career-item" key={index}>
            <h3>{job.company}</h3>
            <p> {job.period}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
  
export default Career;
  