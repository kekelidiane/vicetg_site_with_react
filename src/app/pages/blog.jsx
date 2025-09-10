import sensib from '../assets/sensib.jpg'

function Blog() {
  return (
    <div id="blog" className="cadre bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          Notre blog d'activités
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Découvrez nos actualités : activités scolaires et projets environnementaux.
        </p>
      </div>

      {/* Articles */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">   
        
        <div className="flex items-center gap-4 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
          <img 
            src={sensib.src}
            alt="Nos récoltes de cette saison" 
            className="w-32 h-24 object-cover rounded-md"
          />

          <div>
            <h3 className="text-xl font-semibold text-green-700 hover:text-yellow-500 transition">
              <a href="single.html">Nos récoltes de cette saison</a>
            </h3>
            <p className="text-sm text-yellow-500 mb-2">
              <span>20 Juin 2023</span> par <a href="#" className="text-green-700">Diane</a>
            </p>
            <p className="text-gray-700">
              Investir dans notre association peut transformer des vies.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
          <img 
            src={sensib.src}
            alt="Nos récoltes de cette saison" 
            className="w-32 h-24 object-cover rounded-md"
          />

          <div>
            <h3 className="text-xl font-semibold text-green-700 hover:text-yellow-500 transition">
              <a href="single.html">Nos récoltes de cette saison</a>
            </h3>
            <p className="text-sm text-yellow-500 mb-2">
              <span>20 Juin 2023</span> par <a href="#" className="text-green-700">Diane</a>
            </p>
            <p className="text-gray-700">
              Investir dans notre association peut transformer des vies.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
          <img 
            src={sensib.src}
            alt="Nos récoltes de cette saison" 
            className="w-32 h-24 object-cover rounded-md"
          />

          <div>
            <h3 className="text-xl font-semibold text-green-700 hover:text-yellow-500 transition">
              <a href="single.html">Nos récoltes de cette saison</a>
            </h3>
            <p className="text-sm text-yellow-500 mb-2">
              <span>20 Juin 2023</span> par <a href="#" className="text-green-700">Diane</a>
            </p>
            <p className="text-gray-700">
              Investir dans notre association peut transformer des vies.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
          <img 
            src={sensib.src}
            alt="Nos récoltes de cette saison" 
            className="w-32 h-24 object-cover rounded-md"
          />

          <div>
            <h3 className="text-xl font-semibold text-green-700 hover:text-yellow-500 transition">
              <a href="single.html">Nos récoltes de cette saison</a>
            </h3>
            <p className="text-sm text-yellow-500 mb-2">
              <span>20 Juin 2023</span> par <a href="#" className="text-green-700">Diane</a>
            </p>
            <p className="text-gray-700">
              Investir dans notre association peut transformer des vies.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Blog;
