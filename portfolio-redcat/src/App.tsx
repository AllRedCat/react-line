// import section
import { useState } from 'react'
import './App.css'
import Home from './Home.tsx'
import About from './About.tsx'
import Services from './Services.tsx'
import Jobs from './Jobs.tsx'

// pages section
function HomePage() {
  return (<Home />);
}

function AboutPage() {
  return (<About />);
}

function ServicesPage() {
  return (<Services />)
}

function JobsPage() {
  return (<Jobs />)
}

// App section
function App() {
  const [showHome, setShowHome] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showJobs, setShowJobs] = useState(false);

  function HomeShow() {
    setShowHome(true);
    setShowAbout(false);
    setShowServices(false);
    setShowJobs(false);
  }

  function AboutShow() {
    setShowAbout(true);
    setShowHome(false);
    setShowServices(false);
    setShowJobs(false);
  }

  function ServicesShow() {
    setShowServices(true);
    setShowHome(false);
    setShowAbout(false);
    setShowJobs(false);
  }

  function JobsShow() {
    setShowJobs(true);
    setShowHome(false);
    setShowAbout(false);
    setShowServices(false);
  }

  return (
    <>
      <body>
        <header>
          <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container bg-ligh-subtle">
              <a className="navbar-brand" href="#" onClick={HomeShow}>RedCat</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                  <a className="nav-link" href="#" onClick={AboutShow}>Sobre</a>
                  <a className="nav-link" href="#" onClick={ServicesShow}>Serviços</a>
                  <a className="nav-link" href="#" onClick={JobsShow}>Portfólio</a>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main>
          {showHome && <HomePage />}
          {showAbout && <AboutPage />}
          {showServices && <ServicesPage />}
          {showJobs && <JobsPage />}
        </main>
      </body>
    </>
  )
}

export default App
