import DonateBody from './body';
import Footer from './footer';

<link rel="icon" href="/favicon.ico" />


function App() {
  return (
    <div className="App bg-gray-100 min-h-screen text-black">
      <title>vicetg</title>
      <meta charSet="utf-8" />

      <main>
         
        <DonateBody />
        <Footer />
      </main>

    </div>
  );
}

export default App;