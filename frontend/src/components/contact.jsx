'use client';
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    objet: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu peux ajouter la logique d'envoi de mail ou API
    setStatus("Votre message a été envoyé avec succès !");
    setFormData({ nom: "", prenom: "", email: "", objet: "", message: "" });
  };

  return (
    <div id="contact" className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      {/* Titre */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          Contactez-nous
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Vous avez d'autres questions? <a href="http://wa.me/22893203809" className="text-xl font-semibold text-green-700 hover:text-yellow-500 transition mb-1">
            Ecrivez-nous 
          </a> ou Envoyez-nous un mail !
        </p>
      </div>

      {/* Formulaire */}
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" 
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Nom" 
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
            required
          />
          <input 
            type="text" 
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            placeholder="Prénom(s)" 
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Adresse mail" 
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
            required
          />
          <input 
            type="text" 
            name="objet"
            value={formData.objet}
            onChange={handleChange}
            placeholder="Objet" 
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>

        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message" 
          rows={6} 
          className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
          required
        />

        <div className="text-center">
          <button 
            type="submit" 
            className="bg-green-700 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition cursor-pointer"
          >
            Envoyer
          </button>
        </div>

        {status && (
          <p className="text-center mt-6 text-green-700 font-medium">{status}</p>
        )}
      </form>
    </div>
  );
}

export default Contact;
