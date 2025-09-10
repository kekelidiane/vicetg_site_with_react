import ujpod from '../assets/ujpod.jpg';

function Home() {
  return (
    <div id="home" className="cadre bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="bg-gray-50 max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Vie <span className="text-green-700">Cultre</span> <span className="text-yellow-400">Environement</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            L'Association <span className="font-semibold text-green-700">VICE Togo </span> 
            se consacre à soutenir les enfants les plus démunis à travers l'éducation, 
            tout en promouvant la consommation et l'agriculture biologiques, ainsi que le reboisement.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Vous pouvez soutenir notre association en faisant un don, en devenant bénévole
            ou en partageant notre cause avec votre entourage.
          </p>

          <div className="mt-6 flex gap-4">
            <a href="#donate" className="px-6 py-3 bg-green-700 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition cursor-pointer">
              Faire un don
            </a>
            <a href="#contact" className="px-6 py-3 border border-green-700 font-semibold text-green-700 rounded-lg hover:bg-green-50 transition cursor-pointer">
              Nous contacter
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img 
            src={ujpod.src} 
            alt="agro" 
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
