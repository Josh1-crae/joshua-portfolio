const galleryItems = [
  { number: "01", title: "Digital Ideas", category: "CREATIVE PROCESS", symbol: "✳", tone: "gallery-blue", description: "Sketching ideas and exploring layouts" },
  { number: "02", title: "Code & Build", category: "DEVELOPMENT", symbol: "</>", tone: "gallery-purple", description: "Learning by making small projects" },
  { number: "03", title: "Game Time", category: "GAMING", symbol: "⌁", tone: "gallery-orange", description: "Enjoying games and interactive worlds" },
  { number: "04", title: "Fresh Perspective", category: "INSPIRATION", symbol: "◉", tone: "gallery-green", description: "Finding inspiration in everyday things" },
  { number: "05", title: "Keep Learning", category: "STUDENT LIFE", symbol: "▤", tone: "gallery-pink", description: "Taking notes, practicing, and improving" },
  { number: "06", title: "Next Chapter", category: "FUTURE GOALS", symbol: "↗", tone: "gallery-dark", description: "Working toward new skills and goals" }
];

export default function GalleryPage() {
  return (
    <section className="page-container content-page">
      <div className="section-heading"><p className="eyebrow">MY VISUAL JOURNAL</p><h1>The <span>Gallery</span></h1><p>A collection of themes and interests that inspire my learning journey.</p></div>
      <div className="gallery-grid">
        {galleryItems.map((item) => <article className="gallery-card" key={item.number}><div className={`gallery-art ${item.tone}`}><span className="gallery-index">{item.number} — {item.category}</span><span className="gallery-symbol">{item.symbol}</span><span className="gallery-art-ring" /></div><div className="gallery-info"><div><h2>{item.title}</h2><p>{item.description}</p></div><span className="gallery-arrow">↗</span></div></article>)}
      </div>
      <div className="gallery-note"><span>✦</span><p>This gallery represents the things that keep me curious. I’ll continue adding more projects, experiences, and creative work as I learn.</p></div>
    </section>
  );
}
