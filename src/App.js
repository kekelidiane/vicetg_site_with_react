import { Helmet } from 'react-helmet';
import './App.css';

import Home from './components/home';
import About from './components/about';
import Donate from './components/donate';
import Blog from './components/blog';
import Contact from './components/contact';
import Footer from './components/footer';

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
