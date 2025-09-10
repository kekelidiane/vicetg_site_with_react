function About() {
  return (

    <div id="about" className="cadre bg-gray-50 py-24 px-6 md:px-12 lg:px-24">
      
      {/* Bloc "Nos Actions" */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          Nos actions
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          L'association <span className="font-semibold text-green-700">VICE-Togo</span> agit dans principalement deux domaines dont : 
        </p>
      </div>

      {/* Blocs Education et Environnement */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Bloc Éducation */}
        <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition">
          <h3 className="text-2xl font-bold text-green-700 mb-6 border-b-4 border-yellow-400 inline-block pb-2">
            ÉDUCATION
          </h3>
          <ul className="text-gray-700 space-y-3 leading-relaxed list-disc list-inside">
            <li><span className="font-semibold">Soutien scolaire aux enfants</span></li>
            <li><span className="font-semibold">Distribution de kits scolaires.</span></li>
            <li><span className="font-semibold">Séances d'animations tous les weekends et congés</span></li>
          </ul>
        </div>

        {/* Bloc Environnement */}
        <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition">
          <h3 className="text-2xl font-bold text-green-700 mb-6 border-b-4 border-yellow-400 inline-block pb-2">
            ENVIRONNEMENT
          </h3>
          <ul className="text-gray-700 space-y-3 leading-relaxed list-disc list-inside">
            <li><span className="font-semibold">Production de légumes biologiques</span></li>
            <li><span className="font-semibold">Plantation d'arbres chaque année</span></li>
            <li><span className="font-semibold">Promotion de l’agriculture biologique</span></li>
            <li><span className="font-semibold">Nettoyage et mise au propre du village</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
