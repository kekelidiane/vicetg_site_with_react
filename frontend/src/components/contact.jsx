"use client"; // obligatoire car on utilise des hooks

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message envoyé avec succès !");
        setFormData({ nom: "", prenom: "", email: "", objet: "", message: "" });
      } else {
        setStatus("❌ Erreur lors de l'envoi.");
      }
    } catch (error) {
      setStatus("⚠️ Problème de connexion.");
    }
  };

  return (
    <div id="contact" className="cadre bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          Contactez - nous
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Vous avez des questions ou souhaitez nous soutenir ? Envoyez-nous un message !
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <input 
            type="text" 
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Nom" 
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            required
          />
          <input 
            type="text" 
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            placeholder="Prénom(s)" 
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Adresse mail" 
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            required
          />
          <input 
            type="text" 
            name="objet"
            value={formData.objet}
            onChange={handleChange}
            placeholder="Objet" 
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          />
        </div>

        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message" 
          rows={6} 
          className="border border-gray-300 rounded-lg px-4 py-2 w-full"
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
      </form>

      {status && (
        <p className="text-center mt-6 text-gray-700">{status}</p>
      )}
    </div>
  );
}

export default Contact;
