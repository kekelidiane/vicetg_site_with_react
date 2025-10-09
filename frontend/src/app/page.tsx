import Home from '../components/home';
import About from '../components/about';
import Donate from '../components/donate';
import Blog from '../components/blog';
import Contact from '../components/contact';
import Footer from '../components/footer';
import Navbar from '../components/navbar'

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
        <Blog />
        <Donate />
        <Contact />
        <Footer />
      </main>

    </div>
  );
}

export default App;