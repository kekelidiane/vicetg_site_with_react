function Contact() {
  return (
    <div id="contact" className="cadre bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          Contactez-nous
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Vous avez des questions ou souhaitez nous soutenir ? Envoyez-nous un message !
        </p>
      </div>

      <form className="max-w-3xl mx-auto space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="Nom" 
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700 w-full"
          />
          <input 
            type="text" 
            placeholder="Prénom(s)" 
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700 w-full"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="Adresse mail ou contact WhatsApp" 
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700 w-full"
          />
          <input 
            type="text" 
            placeholder="Objet" 
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700 w-full"
          />
        </div>

        <textarea 
          placeholder="Votre message" 
          rows={6} 
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700 w-full"
        />

        <div className="text-center">
          <button 
            type="submit" 
            className="bg-green-700 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition cursor-pointer"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
