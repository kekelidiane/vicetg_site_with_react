import { Helmet } from 'react-helmet';
import './App.css';

import Home from './pages/home';
import About from './pages/about';
import Donate from './pages/donate';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Footer from './pages/footer';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>VICE-TOGO</title>
        <meta charSet="utf-8" />
      </Helmet>

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
