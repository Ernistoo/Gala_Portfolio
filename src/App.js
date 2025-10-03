import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Fade-in observer
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav-links a");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Highlight nav link for active section
            navLinks.forEach(link => {
              link.classList.remove("active");
              if (link.getAttribute("href") === `#${entry.target.id}`) {
                link.classList.add("active");
              }
            });
            // Add visible fade-in class
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.4 } // triggers when ~40% of section is in view
    );

    sections.forEach(sec => observer.observe(sec));

    // Smooth scroll fallback for older browsers
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
      });
    });

    return () => {
      sections.forEach(sec => observer.unobserve(sec));
    };
  }, []);

  return (
    <div className="App">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <span className="logo">EnhancedPortfolio</span>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Designing <span>Beautiful Interfaces</span> <br /> for the Modern Web
          </h1>
          <p className="hero-subtitle">
            Frontend Developer • UX Enthusiast • Creative Coder
          </p>
          <a href="#projects" className="btn-primary">Explore Work</a>
        </div>
      </header>

      {/* MAIN */}
      <main>
        <section id="projects" className="section">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <div className="card soft">
              <h3>Portfolio Builder</h3>
              <p>A no-code tool that lets designers quickly spin up portfolio sites with templates.</p>
              <a href="https://github.com/friend/project-one" target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </div>
            <div className="card soft">
              <h3>Task Management App</h3>
              <p>A productivity app with drag-and-drop features, built with React & Firebase.</p>
              <a href="https://github.com/friend/project-two" target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </div>
            <div className="card soft">
              <h3>Design System</h3>
              <p>A custom UI component library inspired by Material Design + Apple HIG.</p>
              <a href="https://github.com/friend" target="_blank" rel="noopener noreferrer">
                GitHub Profile →
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section alt">
          <h2>About Me</h2>
          <p>
            I’m a frontend developer passionate about clean design, smooth interactions, and delightful user experiences.
            I work with React, Next.js, TailwindCSS, and I’m obsessed with pixel-perfect UI design.
          </p>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:friend.email@example.com">friend.email@example.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/friendprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/friendprofile</a></p>
          <p>GitHub: <a href="https://github.com/friend" target="_blank" rel="noopener noreferrer">github.com/friend</a></p>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Enhanced Portfolio · Built with React ⚡</p>
      </footer>
    </div>
  );
}

export default App;
