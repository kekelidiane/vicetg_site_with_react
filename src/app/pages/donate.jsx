import logo_addil from '../assets/logo_addil.png'

function Donate() {
  return (
    <div id="donate" className="cadre bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      
      {/* Titre */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          Soutenez VICE-TOGO
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Votre soutien nous permet de continuer nos actions pour l'éducation et l'environnement.
        </p>
      </div>

      {/* Blocs de dons / bénévolat / produits */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-green-700 mb-4 border-b-4 border-yellow-400 inline-block pb-2">
            Faire un don
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Soutenez notre cause en faisant un don et aidez-nous à atteindre plus d’enfants et villages.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-green-700 mb-4 border-b-4 border-yellow-400 inline-block pb-2">
            Acheter des produits
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Achetez nos légumes et produits locaux, cultivés durablement, et soutenez nos actions.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-green-700 mb-4 border-b-4 border-yellow-400 inline-block pb-2">
            Devenir bénévole
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Rejoignez notre équipe de bénévoles engagés pour participer activement à nos projets.
          </p>
        </div>
      </div>
{/*       
      <div id="partenaires" className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
        <h2 className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Ils nous font confiance
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          <img src={logo_addil.src} alt="part1" className="h-16 object-contain" />
        </div>
      </div> */}

    </div>
  );
}

export default Donate;
