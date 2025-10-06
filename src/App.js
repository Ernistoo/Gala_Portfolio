import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Tikai smooth scroll funkcija
    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute("href");
      
      // Pārbauda vai ir iekšējā saite (#)
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({ 
            behavior: "smooth",
            block: "start"
          });
        }
      }
      // Ārējās saites (ar target="_blank") tiks atvērtas normāli
    };

    // Pievieno klikšķa notikumu visām saitēm
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup
    return () => {
      allLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="App">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <span className="logo">Portfolio</span>
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
          <img 
            src="/images/your-photo.jpg" 
            alt="Your Name"
            className="profile-image"
          />
          <h1 className="hero-title">
            Designing <span>Beautiful websites</span> <br /> for the Modern Web
          </h1>
          <p className="hero-subtitle">
            Full-stack Developer
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
              <h3>Hash</h3>
              <p>My project for schools final exam, with the intention of making a place for people to share their interests!</p>
              <a
                href="https://github.com/Ernistoo/Gala_darbs_Hash"
                target="_blank"
                
              >
                View Project →
              </a>
            </div>
            <div className="card soft">
              <h3>IntoMyth</h3>
              <p>A project about mythology around the world!</p>
              <a
                href="https://github.com/Ernistoo/IntoMyth"
                target="_blank"
                
              >
                View Project →
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section alt">
          <h2>About Me</h2>
          <p>
            I'm a full-stack developer with a passion for making websites for people to truly enjoy using my knowledge in Laravel, React, PHP, Blade, TailwindCSS and JavaScript!
          </p>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:ernests.lauga@gmail.com">ernests.lauga@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/Ernistoo" target="_blank" rel="noopener noreferrer">github.com/Ernistoo</a></p>
        </section>
      </main>

      
    </div>
  );
}

export default App;