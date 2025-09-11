import { FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="bg-green-700 text-white py-10 px-6 md:px-12 lg:px-24">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Bloc VICE Togo */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-yellow-400">Et vous ?</h2>
          <p className="font-bold mb-6">
            Rejoignez notre association pour<br /> qu'ensemble, nous contribuions<br /> à un monde meilleur.
          </p>
        </div>

        {/* Bloc Liens */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-yellow-400">Nous découvrir</h2>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-yellow-300">A propos</a></li>
            <li><a href="#" className="hover:text-yellow-300">Nos activités</a></li>
            <li><a href="#" className="hover:text-yellow-300">Nos produits maraîchers</a></li>
            <li><a href="#contact" className="hover:text-yellow-300">Nous contacter</a></li>
          </ul>
        </div>

        {/* Bloc Newsletter & Réseaux */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-yellow-400">S'abonner à notre newsletter</h2>
          <form className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="email"
              placeholder="Entrez votre adresse mail"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-green-700 font-semibold px-4 py-2 rounded-lg transition cursor-pointer"
            >
              S'abonner
            </button>
          </form>

          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold text-yellow-400">Suivez-nous sur</h2>

            <div className="flex gap-4 text-2xl">
              <a href="https://www.facebook.com/vicetogo" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400"> <FaFacebook /> </a>
              {/* <a href="https://www.instagram.com/vicetogo" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/vicetogo" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400"><FaLinkedin /></a>
              <a href="https://www.youtube.com/@vicetogo" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400"><FaYoutube /></a> */}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-white text-sm">
          &copy; VICE-TOGO 2025 | Tous droits réservés. Fait par{" "}
          <a
            href="https://karuidesu.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 hover:text-white cursor-pointer"
          >
            @karuidesu
          </a>
        </p>
      </div>

    </footer>
  );
}

export default Footer;
