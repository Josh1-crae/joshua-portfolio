import Link from "next/link";

export default function HomePage() {
  return (
    <section className="hero page-container">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" /> WELCOME TO MY PORTFOLIO</p>
        <h1>Hi, I’m <span>Joshua S. Ricardo</span></h1>
        <h2>Information Technology Student &amp; Future Developer</h2>
        <p className="hero-description">
          I’m a student who enjoys learning about technology, building useful digital projects,
          and exploring creative ways to solve problems. This is a place to discover my work,
          interests, and journey in IT.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/portfolio">Explore My Work <span>↗</span></Link>
          <Link className="button button-secondary" href="/about">Get to Know Me</Link>
        </div>
        <div className="hero-stats">
          <div><strong>01</strong><span>Curious mindset</span></div>
          <div><strong>02</strong><span>Always learning</span></div>
          <div><strong>03</strong><span>Building skills</span></div>
        </div>
      </div>
      <div className="hero-art" aria-label="Decorative digital illustration">
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />
        <div className="art-glow" />
        <div className="code-window">
          <div className="window-top"><span /><span /><span /><small>hello-world.js</small></div>
          <div className="code-lines">
            <p><i>01</i> <b>const</b> <em>developer</em> = {"{"}</p>
            <p><i>02</i> &nbsp; name: <strong>"Joshua"</strong>,</p>
            <p><i>03</i> &nbsp; passion: <strong>"Technology"</strong>,</p>
            <p><i>04</i> &nbsp; learning: <strong>true</strong>,</p>
            <p><i>05</i> {"}"};</p>
            <p className="code-comment"><i>06</i> // the journey starts here</p>
          </div>
          <div className="terminal-chip"><span className="terminal-dot" /> AVAILABLE FOR NEW IDEAS</div>
        </div>
        <div className="floating-badge badge-top"><span>✦</span> CREATIVE THINKING</div>
        <div className="floating-badge badge-bottom"><span>⌘</span> BUILD • LEARN • REPEAT</div>
      </div>
    </section>
  );
}
