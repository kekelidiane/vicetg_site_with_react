import Home from './pages/home';
import About from './pages/about';
import Donate from './pages/donate';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Footer from './pages/footer';
import logo from '../app/assets/logo.png'

<link rel="icon" href="/favicon.ico" />


function App() {
  return (
    <div className="App bg-gray-100 min-h-screen text-black">
      <title>vicetg</title>
      <meta charSet="utf-8" />

      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="flex justify-between items-center px-6 py-4">
          <img src={logo.src} alt="logo" className="h-10 md:h-12 lg:h-14" />

          <ul className="flex gap-6 font-medium">
            <li><a href="#home" className="text-gray-800 hover:text-green-600">Accueil</a></li>
            <li><a href="#about" className="text-gray-800 hover:text-green-600">A propos de nous</a></li>
            <li><a href="#donate" className="text-gray-800 hover:text-green-600">Nous soutenir</a></li>
            <li><a href="#blog" className="text-gray-800 hover:text-green-600">Actualités</a></li>
            <li><a href="#contact" className="text-gray-800 hover:text-green-600">Nous contacter</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <Home />
        <About />
        <Donate />
        <Blog />
        <Contact />
        <Footer />
      </main>

    </div>
  );
}

export default App;