import { useEffect, useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --ink: #1a1209;
    --cream: #f7f3ec;
    --gold: #c9921a;
    --rust: #b84c1e;
    --sage: #4a5e4f;
    --light: #faf8f4;
  }

  body { background: var(--cream); font-family: 'DM Sans', sans-serif; color: var(--ink); }

  /* ── NAV ── */
  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 3rem; height: 64px;
    background: var(--ink); border-bottom: 2px solid var(--gold);
  }
  .nav-brand {
    font-family: 'Playfair Display', serif; font-size: 1.25rem;
    color: var(--cream); letter-spacing: 0.02em; cursor: pointer;
  }
  .nav-links { display: flex; gap: 2rem; list-style: none; }
  .nav-links li {
    font-size: 0.8rem; font-weight: 500; letter-spacing: 0.12em;
    text-transform: uppercase; color: #bfb8ad; cursor: pointer;
    transition: color 0.2s;
  }
  .nav-links li:hover, .nav-links li.active { color: var(--gold); }

  /* ── PAGES ── */
  .page { min-height: 100vh; padding-top: 64px; }

  /* HOME */
  .hero {
    display: grid; grid-template-columns: 1fr 1fr; min-height: calc(100vh - 64px);
  }
  .hero-left {
    background: var(--ink); display: flex; flex-direction: column;
    justify-content: center; padding: 5rem;
  }
  .hero-eyebrow {
    font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--gold); margin-bottom: 1.5rem;
  }
  .hero-title {
    font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 4vw, 4rem);
    color: var(--cream); line-height: 1.15; margin-bottom: 1.5rem;
  }
  .hero-title em { color: var(--gold); font-style: italic; }
  .hero-sub { color: #9e9488; font-size: 1rem; line-height: 1.7; max-width: 38ch; }
  .hero-badge {
    margin-top: 2.5rem; display: inline-flex; align-items: center; gap: 0.5rem;
    border: 1px solid #3a3025; padding: 0.6rem 1.2rem; border-radius: 2px;
    font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--sage); background: rgba(74,94,79,0.08);
  }
  .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--sage); animation: pulse 2s infinite; }
  @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.3; } }

  .hero-right {
    background: var(--light); display: flex; align-items: center;
    justify-content: center; padding: 4rem;
    background-image: repeating-linear-gradient(0deg, transparent, transparent 39px, #e8e2d6 39px, #e8e2d6 40px),
                      repeating-linear-gradient(90deg, transparent, transparent 39px, #e8e2d6 39px, #e8e2d6 40px);
  }
  .status-card {
    background: white; border: 1px solid #e0d9ce; padding: 2.5rem;
    max-width: 340px; width: 100%; box-shadow: 8px 8px 0 var(--gold);
  }
  .status-card h3 {
    font-family: 'Playfair Display', serif; font-size: 1.1rem;
    margin-bottom: 1rem; color: var(--ink);
  }
  .api-msg {
    font-size: 0.9rem; color: var(--sage); padding: 0.8rem;
    border-left: 3px solid var(--gold); background: #f5f1e8;
    min-height: 2.5rem; word-break: break-word;
  }
  .api-label { font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.15em; color: #aaa; margin-bottom: 0.4rem; }

  /* ABOUT */
  .about-wrap { max-width: 900px; margin: 0 auto; padding: 5rem 2rem; }
  .section-tag {
    font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--gold); margin-bottom: 1rem; display: block;
  }
  .about-title {
    font-family: 'Playfair Display', serif; font-size: clamp(2rem, 3vw, 3rem);
    line-height: 1.2; margin-bottom: 2.5rem; max-width: 20ch;
  }
  .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 3rem; }
  .about-block {
    border-top: 2px solid var(--ink); padding-top: 1.5rem;
  }
  .about-block h4 {
    font-family: 'Playfair Display', serif; font-size: 1.1rem; margin-bottom: 0.8rem;
  }
  .about-block p { font-size: 0.92rem; line-height: 1.75; color: #5a5040; }
  .stat-row { display: flex; gap: 3rem; margin-top: 3rem; padding-top: 3rem; border-top: 1px solid #e0d9ce; }
  .stat { text-align: center; }
  .stat-num { font-family: 'Playfair Display', serif; font-size: 2.5rem; color: var(--rust); }
  .stat-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-top: 0.3rem; }

  /* STACK */
  .stack-wrap { max-width: 900px; margin: 0 auto; padding: 5rem 2rem; }
  .stack-title {
    font-family: 'Playfair Display', serif; font-size: clamp(2rem, 3vw, 3rem);
    margin-bottom: 3rem;
  }
  .stack-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
  .stack-card {
    border: 1px solid #ddd6ca; padding: 1.8rem; position: relative; overflow: hidden;
    transition: transform 0.25s, box-shadow 0.25s; cursor: default;
  }
  .stack-card:hover { transform: translateY(-4px); box-shadow: 4px 4px 0 var(--gold); }
  .stack-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: var(--gold);
  }
  .stack-icon { font-size: 1.8rem; margin-bottom: 1rem; }
  .stack-name { font-family: 'Playfair Display', serif; font-size: 1rem; margin-bottom: 0.5rem; }
  .stack-desc { font-size: 0.82rem; color: #7a705e; line-height: 1.6; }

  /* CONTACT */
  .contact-wrap { max-width: 700px; margin: 0 auto; padding: 5rem 2rem; text-align: center; }
  .contact-title { font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3.5rem); margin-bottom: 1rem; }
  .contact-sub { color: #7a705e; font-size: 1rem; line-height: 1.7; margin-bottom: 3rem; }
  .contact-links { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
  .contact-btn {
    padding: 0.75rem 2rem; border: 2px solid var(--ink); font-size: 0.8rem;
    letter-spacing: 0.12em; text-transform: uppercase; cursor: pointer;
    background: transparent; transition: all 0.2s; font-family: 'DM Sans', sans-serif;
    text-decoration: none; color: var(--ink);
  }
  .contact-btn:hover, .contact-btn.primary { background: var(--ink); color: var(--cream); }
  .contact-btn.primary { border-color: var(--ink); }

  /* FOOTER */
  footer {
    background: var(--ink); color: #6b6050; text-align: center;
    padding: 2rem; font-size: 0.75rem; letter-spacing: 0.08em;
  }
  footer span { color: var(--gold); }

  /* fade-in */
  .fade { animation: fadeUp 0.5s ease both; }
  @keyframes fadeUp { from { opacity:0; transform: translateY(16px); } to { opacity:1; transform: none; } }

  @media (max-width: 700px) {
    .hero { grid-template-columns: 1fr; }
    .hero-left { padding: 3rem 1.5rem; }
    .hero-right { display: none; }
    .about-grid, .stack-grid { grid-template-columns: 1fr; }
    nav { padding: 0 1.2rem; }
    .nav-links { gap: 1rem; }
    .stat-row { gap: 1.5rem; }
  }
`;

const STACK = [
  { icon: "⚛️", name: "React", desc: "Component-driven UI with hooks and modern patterns." },
  { icon: "🐳", name: "Docker", desc: "Containerised deployment for consistent environments." },
  { icon: "☁️", name: "Oracle Cloud", desc: "Scalable cloud infrastructure powering this app." },
  { icon: "⚡", name: "Vite", desc: "Lightning-fast build tooling and hot module reload." },
  { icon: "🔗", name: "REST API", desc: "Backend endpoint delivering live data to the frontend." },
  { icon: "🎨", name: "CSS Variables", desc: "Consistent design tokens for cohesive theming." },
];

export default function App() {
  const [page, setPage] = useState("home");
  const [msg, setMsg] = useState("Loading…");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/hello`)
      .then(r => r.json())
      .then(d => setMsg(d.message))
      .catch(() => setMsg("API unreachable"));
  }, []);

  const nav = (p) => setPage(p);

  return (
    <>
      <style>{styles}</style>

      <nav>
        <div className="nav-brand" onClick={() => nav("home")}>Timiksha ✦</div>
        <ul className="nav-links">
          {["home","about","stack","contact"].map(p => (
            <li key={p} className={page === p ? "active" : ""} onClick={() => nav(p)}>
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </li>
          ))}
        </ul>
      </nav>

      {/* HOME */}
      {page === "home" && (
        <div className="page fade">
          <div className="hero">
            <div className="hero-left">
              <p className="hero-eyebrow">Student · Developer · Builder</p>
              <h1 className="hero-title">Studying hard,<br /><em>building harder.</em></h1>
              <p className="hero-sub">
                Timiksha is preparing for her annual examination while shipping real projects on cloud infrastructure. Discipline meets ambition.
              </p>
              <div className="hero-badge">
                <span className="dot" />
                Deployed on Oracle Cloud Infrastructure
              </div>
            </div>
            <div className="hero-right">
              <div className="status-card">
                <h3>Live API Status</h3>
                <div className="api-label">Response from /hello</div>
                <div className="api-msg">{msg}</div>
                <div style={{marginTop:"1.5rem", borderTop:"1px solid #eee", paddingTop:"1rem"}}>
                  <div className="api-label">Containerised with</div>
                  <div style={{fontSize:"0.85rem", color:"#555", marginTop:"0.3rem"}}>Docker · Oracle Cloud</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ABOUT */}
      {page === "about" && (
        <div className="page fade">
          <div className="about-wrap">
            <span className="section-tag">About</span>
            <h2 className="about-title">Focused on growth, one exam at a time.</h2>
            <p style={{fontSize:"1rem", lineHeight:"1.8", color:"#5a5040", maxWidth:"60ch"}}>
              Timiksha is a dedicated student balancing rigorous academic preparation with a passion for building real-world software. Her work spans cloud deployment, containerisation, and frontend development.
            </p>
            <div className="about-grid">
              <div className="about-block">
                <h4>Academic Focus</h4>
                <p>Committed to excelling in annual examinations through structured study, consistent revision, and disciplined practice. Hard work and consistency are the foundation.</p>
              </div>
              <div className="about-block">
                <h4>Technical Pursuits</h4>
                <p>Builds and ships full-stack applications using Docker and Oracle Cloud Infrastructure. Passionate about turning ideas into deployed, production-grade software.</p>
              </div>
            </div>
            <div className="stat-row">
              {[["100%","Dedication"],["24/7","Uptime Goal"],["∞","Curiosity"]].map(([n,l]) => (
                <div className="stat" key={l}>
                  <div className="stat-num">{n}</div>
                  <div className="stat-label">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* STACK */}
      {page === "stack" && (
        <div className="page fade">
          <div className="stack-wrap">
            <span className="section-tag">Tech Stack</span>
            <h2 className="stack-title">Tools powering this project.</h2>
            <div className="stack-grid">
              {STACK.map(s => (
                <div className="stack-card" key={s.name}>
                  <div className="stack-icon">{s.icon}</div>
                  <div className="stack-name">{s.name}</div>
                  <div className="stack-desc">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CONTACT */}
      {page === "contact" && (
        <div className="page fade">
          <div className="contact-wrap">
            <span className="section-tag">Contact</span>
            <h2 className="contact-title">Let's connect.</h2>
            <p className="contact-sub">
              Whether it's about studies, tech, or collaborating on a project — feel free to reach out.
            </p>
            <div className="contact-links">
              <a href="mailto:hello@example.com" className="contact-btn primary">Send Email</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-btn">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-btn">LinkedIn</a>
            </div>
          </div>
        </div>
      )}

      <footer>
        <p>© 2026 <span>Timiksha</span> · Built with React · Deployed with <span>Docker & Oracle Cloud</span></p>
      </footer>
    </>
  );
}