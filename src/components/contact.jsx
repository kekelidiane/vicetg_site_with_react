function Contact() {
  return (
    <div className="bloc-contact" id="contact">
      <div className="container">
        <h2>Contactez-nous</h2>
        <form>
          <div className="form-group row">
            <input type="text" className="form-control" placeholder="Nom" />
            <input type="text" className="form-control" placeholder="Prénom(s)" />
          </div>
          <div className="form-group row">
            <input type="email" className="form-control" placeholder="Adresse mail" />
          </div>
          <div className="form-group row">
            <textarea className="form-control" placeholder="Votre message" rows={6}></textarea>
          </div>
          <div className="form-group row">
            <input type="submit" className="btn" value="Envoyer" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
