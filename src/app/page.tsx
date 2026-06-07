import Home from '../components/layout/home';
import About from '../components/layout/about';
import Donate from '../components/layout/donate';
import Blog from '../components/layout/blog';
import Contact from '../components/layout/contact';
import Footer from '../components/layout/footer';
import Navbar from '../components/layout/navbar'

<link rel="icon" href="/favicon.ico" />


function App() {
  return (
    <div className="App bg-gray-100 min-h-screen text-black">
      <title>vicetg</title>
      <meta charSet="utf-8" />

      <header className="bg-white shadow-md sticky top-0 z-50">
        <Navbar/>
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