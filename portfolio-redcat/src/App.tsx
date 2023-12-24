import { useState } from 'react'
import './App.css'
import Home from './Home.tsx'
import About from './About.tsx'

function HomePage() {
  return (<Home />);
}

function App() {
  const [showHome, setShowHome] = useState(true);
  

  function HomeShow() {
    setShowHome(true);
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
                  <a className="nav-link" href="">Sobre</a>
                  <a className="nav-link" href="">Serviços</a>
                  <a className="nav-link" href="">Portfólio</a>
                  <a className="nav-link" href="">Contato</a>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main>
          {showHome && <HomePage />}
        </main>
      </body>
    </>
  )
}

export default App
