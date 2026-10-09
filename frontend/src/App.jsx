import './App.css';

const sections = [
  {
    title: 'Smart contract foundation',
    description: 'Production-oriented Soroban starter with secure defaults, typed contracts, and test coverage.',
  },
  {
    title: 'Frontend ready',
    description: 'A polished React interface that documents the protocol, deployment flow, and maintainer standards.',
  },
  {
    title: 'Operational discipline',
    description: 'CI automation, security guidance, deployment checklists, and contributor workflows for public repositories.',
  },
];

const quickLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Security', href: '#security' },
  { label: 'Deployment', href: '#deployment' },
  { label: 'Contributing', href: '#contributing' },
];

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <span className="brand-mark">S</span>
          <div>
            <p className="eyebrow">Stellar starter kit</p>
            <h1>Stellar Production Template</h1>
          </div>
        </div>
        <nav className="nav" aria-label="Main navigation">
          {quickLinks.map((link) => (
            <a key={link.label} href={link.href}>{link.label}</a>
          ))}
        </nav>
      </header>

      <main className="page">
        <section className="hero" id="overview">
          <div className="hero-copy">
            <p className="eyebrow accent">Maintainer-grade starter</p>
            <h2>Build, test, and ship Soroban apps with confidence.</h2>
            <p className="lede">
              This template is designed for teams that need a clean foundation for secure Stellar smart contracts,
              reliable frontend integration, and transparent operational practices.
            </p>
            <div className="cta-row">
              <a className="primary" href="#architecture">Explore architecture</a>
              <a className="secondary" href="#security">Review security</a>
            </div>
          </div>
          <div className="hero-panel">
            <div className="stat-card">
              <span>Contract readiness</span>
              <strong>Production mindset</strong>
            </div>
            <div className="stat-card">
              <span>Frontend</span>
              <strong>React + docs</strong>
            </div>
            <div className="stat-card">
              <span>Ops</span>
              <strong>CI + deployment</strong>
            </div>
          </div>
        </section>

        <section className="feature-grid" aria-label="Project features">
          {sections.map((section) => (
            <article key={section.title} className="feature-card">
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <article id="architecture" className="doc-card">
            <p className="eyebrow">Architecture</p>
            <h3>Clear separation of concerns</h3>
            <ul>
              <li>Rust and Soroban contracts for blockchain logic</li>
              <li>React UI for wallet interaction and workflow UX</li>
              <li>Operational scripts for local, testnet, and mainnet flows</li>
            </ul>
          </article>

          <article id="security" className="doc-card">
            <p className="eyebrow">Security</p>
            <h3>Security-first defaults</h3>
            <ul>
              <li>Role separation and explicit admin handling</li>
              <li>Input validation and runtime-safe patterns</li>
              <li>Clear vulnerability disclosure and dependency monitoring</li>
            </ul>
          </article>

          <article id="deployment" className="doc-card">
            <p className="eyebrow">Deployment</p>
            <h3>Operational readiness</h3>
            <ul>
              <li>Network-aware environment variables</li>
              <li>Automated CI checks for code and tests</li>
              <li>Documented deployment and verification flow</li>
            </ul>
          </article>

          <article id="contributing" className="doc-card">
            <p className="eyebrow">Contributing</p>
            <h3>Maintainer-friendly workflow</h3>
            <ul>
              <li>Issue-first contribution model</li>
              <li>Consistent coding and review expectations</li>
              <li>Documentation updates with every change</li>
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
