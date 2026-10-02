import Link from "next/link";

const values = [
  { icon: "⌘", title: "Technology", text: "I enjoy exploring how software and digital tools can make everyday tasks easier." },
  { icon: "✦", title: "Creativity", text: "I like turning ideas into designs and projects that feel clear, useful, and personal." },
  { icon: "↗", title: "Growth", text: "I believe progress comes from practice, patience, asking questions, and learning from mistakes." }
];

export default function AboutPage() {
  return (
    <section className="page-container content-page about-page">
      <div className="section-heading"><p className="eyebrow">A LITTLE ABOUT ME</p><h1>The person behind <span>the projects.</span></h1><p>Getting to know me, my interests, and what I hope to achieve.</p></div>
      <div className="about-layout">
        <div className="profile-panel"><div className="profile-monogram">JSR</div><div className="profile-caption"><span className="status-dot" /> STUDENT • CREATIVE LEARNER</div><h2>Joshua S. Ricardo</h2><p>Information Technology Student</p><div className="profile-divider" /><div className="profile-detail"><span>FOCUS</span><strong>Web Development</strong></div><div className="profile-detail"><span>APPROACH</span><strong>Learn by doing</strong></div></div>
        <div className="about-copy"><p className="card-eyebrow">MY STORY</p><h2>Learning today, building for tomorrow.</h2><p>I’m Joshua S. Ricardo, an Information Technology student working toward a stronger foundation in programming, web development, and user interface design.</p><p>As I continue studying, I want to create projects that are not only functional but also easy and enjoyable to use. Every assignment gives me a chance to improve, try something new, and understand technology a little better.</p><div className="value-grid">{values.map((value) => <article className="value-card" key={value.title}><span className="value-icon">{value.icon}</span><h3>{value.title}</h3><p>{value.text}</p></article>)}</div><Link className="text-link" href="/gallery">Take a look at my gallery <span>→</span></Link></div>
      </div>
    </section>
  );
}
