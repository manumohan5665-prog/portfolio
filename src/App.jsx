
import "./index.css";

function App() {
  return (
    <main>
      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo">
          <span className="logo-dot"></span>
          <strong>manu</strong>
          <span className="logo-light">mohandas</span>
        </a>

        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="availability">
          <span className="availability-dot"></span>
          AVAILABLE FOR SELECT PROJECTS
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-image"></div>
        <div className="hero-overlay"></div>

        <div className="hero-meta">
          <span>01 / 04</span>
          <span>FULL STACK WEB DEVELOPER · AVAILABLE REMOTELY</span>
        </div>

        <div className="hero-content">
          <p className="eyebrow">HI, I'M</p>

          <h1>
            Manu Mohandas
            <span>Full Stack Web</span>
            <span>Developer</span>
          </h1>

          <p className="hero-description">
            I build responsive, user-friendly and modern web
            applications using technologies like React,
            JavaScript, Node.js and MongoDB.
          </p>
        </div>

        <a href="#work" className="hero-arrow" aria-label="Explore projects">
          ↗
        </a>
      </section>

      {/* Work */}
      <section className="work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="section-label">02 / WORK</p>
            <h2>
              A few things I've
              <span>helped bring to life.</span>
            </h2>
          </div>

          <p className="section-intro">
            Thoughtful interfaces, useful systems,
            <br />
            and a little bit of magic in the details.
          </p>
        </div>

        <div className="projects-grid">
          {/* Project 1 */}
          <article className="project">
            <a
              href="https://github.com/manumohan5665-prog/video-streaming-app.git"
              target="_blank"
              rel="noreferrer"
              className="project-visual project-orange"
              aria-label="Explore VidTube on GitHub"
            >
              <span className="project-number">01</span>
              <div className="project-monogram">S</div>
              <div className="project-cta">
                VIEW PROJECT <span>↗</span>
              </div>
            </a>

            <div className="project-info">
              <div className="project-details">
                <p className="project-category">
                  VIDEO PLATFORM
                </p>
                <h3>VidTube</h3>
                <div className="tech-tags">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>CSS</span>
                </div>
              </div>

              <p className="project-description">
                A video discovery and streaming experience
                with categories, search, playlists and
                a responsive interface.
              </p>
            </div>
          </article>

          {/* Project 2 */}
          <article className="project">
            <a
              href="https://github.com/manumohan5665-prog/audify-music-app.git"
              target="_blank"
              rel="noreferrer"
              className="project-visual project-sage"
              aria-label="Explore Audify on GitHub"
            >
              <span className="project-number">02</span>
              <div className="project-monogram">A</div>
              <div className="project-cta">
                VIEW PROJECT <span>↗</span>
              </div>
            </a>

            <div className="project-info">
              <div className="project-details">
                <p className="project-category">
                  MUSIC EXPERIENCE
                </p>
                <h3>Audify</h3>
                <div className="tech-tags">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>Audio</span>
                </div>
              </div>

              <p className="project-description">
                A music player concept focused on
                an engaging listening experience and
                clean visual design.
              </p>
            </div>
          </article>

          {/* Project 3 */}
          <article className="project">
            <a
              href="https://github.com/manumohan5665-prog/portfolio.git"
              target="_blank"
              rel="noreferrer"
              className="project-visual project-dark"
              aria-label="Explore portfolio source code on GitHub"
            >
              <span className="project-number">03</span>
              <div className="project-monogram">MM</div>
              <div className="project-cta">
                VIEW PROJECT <span>↗</span>
              </div>
            </a>

            <div className="project-info">
              <div className="project-details">
                <p className="project-category">
                  WEB DEVELOPMENT
                </p>
                <h3>Personal Portfolio</h3>
                <div className="tech-tags">
                  <span>React</span>
                  <span>CSS</span>
                  <span>Responsive</span>
                </div>
              </div>

              <p className="project-description">
                A personal space showcasing my work,
                development skills and approach to
                building for the web.
              </p>
            </div>
          </article>
        </div>
      </section>


      {/* About */}
      <section className="about-section" id="about">
        <div className="about-label">
          <p className="section-label">03 / A LITTLE ABOUT ME</p>

          <div className="about-stamp">
            <span>MM</span>
            <small>EST. 2026</small>
          </div>
        </div>

        <div className="about-content">
          <h2>
            The web is where
            <span>ideas become real.</span>
          </h2>

          <div className="about-description">
            <p>
              I'm Manu Mohandas, a full stack web developer
              who enjoys building responsive, user-friendly
              and modern web applications.
            </p>

            <p>
              I work with technologies like React, JavaScript,
              Node.js and MongoDB to turn ideas into useful
              digital experiences.
            </p>

            <p>
              I believe good development is about more than
              writing code. It's about solving problems,
              paying attention to details, and creating
              experiences that feel simple and intuitive.
            </p>
          </div>

          <a href="#contact" className="about-link">
            Let's work together <span>↗</span>
          </a>
        </div>
      </section>


    </main>
  );
}

export default App;
