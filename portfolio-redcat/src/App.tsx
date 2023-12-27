import { useState } from 'react'
import './App.css'
import Home from './Home.tsx'
import About from './About.tsx'
import Services from './Services.tsx'

function HomePage() {
  return (<Home />);
}

function AboutPage() {
  return (<About />);
}

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showAbout, setShowAbout] = useState(false);

  function HomeShow() {
    setShowHome(true);
    setShowAbout(false);
  }

  function AboutShow() {
    setShowAbout(true);
    setShowHome(false);
  }

  return (
    <>
      <body>
        <header>
          <nav className="navbar navbar-expand-lg">
            <div className="container bg-ligh-subtle">
              <a className="navbar-brand" href="#" onClick={HomeShow}>RedCat</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                  <a className="nav-link" href="#" onClick={AboutShow}>Sobre</a>
                  <a className="nav-link" href="#">Serviços</a>
                  <a className="nav-link" href="#">Portfólio</a>
                  <a className="nav-link" href="#">Contato</a>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main>
          {showHome && <HomePage />}
          {showAbout && <AboutPage />}
        </main>
      </body>
    </>
  )
}

export default App
