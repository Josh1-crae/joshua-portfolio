import Link from "next/link";

const projects = [
  { number: "01", type: "WEB DEVELOPMENT", title: "UniformHub", description: "A student-focused uniform shop concept where HCDC students can browse items, check sizes, and place sample orders.", tags: ["HTML", "CSS", "JavaScript"], symbol: "▤", tone: "blue" },
  { number: "02", type: "FRONT-END DESIGN", title: "Personal Portfolio", description: "A responsive multi-page website that introduces my background, showcases projects, and collects creative interests.", tags: ["Next.js", "React", "UI Design"], symbol: "✳", tone: "purple" },
  { number: "03", type: "JAVA PROJECT", title: "Aim Trainer Game", description: "A beginner-friendly game concept focused on reaction, target selection, and practicing programming fundamentals.", tags: ["Java", "GUI", "Logic"], symbol: "◎", tone: "orange" }
];

export default function PortfolioPage() {
  return (
    <section className="page-container content-page">
      <div className="section-heading"><p className="eyebrow">WHAT I’VE BEEN WORKING ON</p><h1>My <span>Portfolio</span></h1><p>Projects, experiments, and ideas that help me grow as an IT student.</p></div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className={`project-visual ${project.tone}`}><span className="project-number">{project.number} / PROJECT</span><span className="project-symbol">{project.symbol}</span><span className="visual-caption">IDEAS INTO REALITY</span></div>
            <div className="project-info"><p className="card-eyebrow">{project.type}</p><h2>{project.title}</h2><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
          </article>
        ))}
      </div>
      <div className="bottom-cta"><div><p className="eyebrow">MORE TO COME</p><h2>Every project is a new lesson.</h2></div><Link className="button button-primary" href="/about">More About Me <span>↗</span></Link></div>
    </section>
  );
}
