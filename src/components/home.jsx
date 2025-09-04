function Home() {
  return (
    <div className='bloc-home' id='home'>
      <header className="navbar" role="banner">
        <div className="nav_container">
          <div className="row align-items-center position-relative">
            <div className="site-logo">
              <img 
                className="rounded-2xl"
                alt="logo"
                src="./assets/logo_vicetg.jpg"
              />
              <a href="#home" className="text-green">VICE-TOGO ASSOCIATION</a>
            </div>

            <nav className="navigation" role="navigation">
              <ul className="menu">
                <li><a href="#home" className="nav-link">Accueil</a></li>
                <li><a href="#about" className="nav-link">A propos de nous</a></li>
                <li><a href="#donate" className="nav-link">Nous soutenir ?</a></li>
                <li><a href="#blog" className="nav-link">Actualités</a></li>
                <li><a href="#contact" className="nav-link">Nous contacter</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
