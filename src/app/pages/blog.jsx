function Blog() {
  return (
    <div id="blog" className="cadre bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      
      {/* Titre */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          Notre blog d'activités
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Découvrez nos actualités : initiatives de solidarité et projets environnementaux.
        </p>
      </div>

      {/* Articles */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        
        <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-green-700 mb-2 hover:text-green-600">
            <a href="single.html">Nos récoltes de cette saison</a>
          </h3>
          <p className="text-yellow-600 text-sm mb-2">
            20 Juin 2023 By <a href="single.html" className="underline hover:text-green-700">Didi</a>
          </p>
          <p className="text-gray-700 leading-relaxed">
            Investir dans notre association peut transformer des vies.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-green-700 mb-2 hover:text-green-600">
            <a href="single.html">Comment devenir bénévole à VICE TOGO</a>
          </h3>
          <p className="text-yellow-600 text-sm mb-2">
            5 Février 2024 By <a href="single.html" className="underline hover:text-green-700">James Cooper</a>
          </p>
          <p className="text-gray-700 leading-relaxed">
            Découvrez comment devenir volontaire et aider concrètement.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-green-700 mb-2 hover:text-green-600">
            <a href="single.html">Nos récoltes de cette saison</a>
          </h3>
          <p className="text-yellow-600 text-sm mb-2">
            20 Juin 2023 By <a href="single.html" className="underline hover:text-green-700">Didi</a>
          </p>
          <p className="text-gray-700 leading-relaxed">
            Investir dans notre association peut transformer des vies.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-green-700 mb-2 hover:text-green-600">
            <a href="single.html">Nos récoltes de cette saison</a>
          </h3>
          <p className="text-yellow-600 text-sm mb-2">
            20 Juin 2023 By <a href="single.html" className="underline hover:text-green-700">Didi</a>
          </p>
          <p className="text-gray-700 leading-relaxed">
            Investir dans notre association peut transformer des vies.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Blog;
