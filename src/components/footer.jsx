function Footer() {
  return (
    <footer classname="bloc-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="footer"><a href="#home">A propos</a></h2>
            <p>
              Découvrez qui nous sommes, notre vision et notre engagement.
              <br />
              Nous vous invitons à rejoindre notre association pour un monde meilleur.
            </p>
          </div>
          {/* <div className="col">

            <h2 className="footer">Nous découvrir</h2>
            <ul className="footer_list">
              <li><a href="#">A propos</a></li>
              <li><a href="#">Témoignages</a></li>
              <li><a href="#">Nos produits</a></li>
              <li><a href="#">Nous contacter</a></li>
            </ul>
          </div> */}
          <div className="mb-5">
            <h2 className="footer-heading mb-4">S'abonner à notre newsletter</h2>
            <form action="#" method="post">
              <div className="newsletter">
                <input type="text" className="subs" placeholder="Entrez votre adresse mail" aria-label="Entrez votre adresse mail" aria-describedby="button-addon2"/>
                <div className="input-group-append">
                  <button type="button" id="button">S'abonner</button>
                </div>
              </div>
              <h2 className="footer-heading mb-4">Suivez-nous sur</h2>
              <a href="#contact" className="foot-icon">
                <span className="icon-facebook" />
              </a>
              <a href="#contact" className="foot-icon">
                <span className="icon-twitter" />
              </a>
              <a href="#contact" className="foot-icon">
                <span className="icon-instagram" />
              </a>
            </form>

            <p>Copyright © VICE-TOGO 2025 | All rights reserved</p>
         
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
