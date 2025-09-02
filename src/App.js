import { Helmet } from 'react-helmet';
import './App.css';

function App() {
  return (

    <div className="App">
      <Helmet>
        <title>vicetg</title>
        <meta charset="utf-8"></meta>
      </Helmet>

      <main>
        <div className='bloc-home' id='home'>
          <header class="navbar" role="banner">
            <div class="nav_container">
              <div class="row align-items-center position-relative">
                <div class="site-logo">
                  <a href="index.html" class="text-green">VICE-TOGO ASSOCIATION</a>
                </div>

                <nav class="navigation" role="navigation">
                  <ul class="menu">
                    <li><a href="#home" class="nav-link">Accueil</a></li>
                    <li><a href="#about" class="nav-link">A propos de nous</a></li>
                    <li><a href="#donate" class="nav-link">Nous soutenir ?</a></li>
                    <li><a href="#blog" class="nav-link">Actualités</a></li>
                    <li><a href="#contact" class="nav-link">Nous contacter</a></li>
                  </ul>
                </nav>

              </div>
            </div>

          </header>
          <div className='bloc-about' id='about'>
            <div>
              <div className='description'>
                <p>
                  L'Association VICE-TOGO se consacre à soutenir les enfants les plus
                  démunis à travers l'éducation, tout en promouvant la consommation et
                  l'agriculture biologiques, ainsi que le reboisement.
                  Vous pouvez soutenir notre association en faisant un don, en devenant bénévole ou
                  en partageant notre cause avec votre entourage.
                  <br />
                  A MODIFIERRRRRRR.
                </p>
              </div>
            </div>

            <div class="bloc-actions">
              <div class="">
                <h2>ACTIONS EDUCATIFS</h2>
                <p>
                  Soutien scolaire : Vice Togo s'occupe de l'éducation des enfants, surtout les orphelins, à travers l'organisation des cours de répetitions par les volontaires <br />
                  Divertissements : Des séances d'animations sont organisées tous les weekends<br />
                  Protection contre le paludisme : Vice Togo intervient dans la sensibilisation de le population surtout dans les villages pour la lutte contre le maniere de maniere naturelle par l'utilisation des moustiquaires immpregnés <br />
                </p>
              </div>

              <div>
                <h2>ACTIONS ENVIRONNEMENTAUX</h2>
                <p>
                  Maraîchage :
                  Reboisement : Nous plantons des arbres chaque année pour restaurer les écosystèmes et préserver la biodiversité.<br />
                  Sensibilisation : Nous organisons des ateliers et des événements pour informer les communautés sur les enjeux environnementaux et encourager des pratiques durables.<br />
                  Gestion des déchets : Nous travaillons avec les communautés pour mettre en place des systèmes de gestion des déchets et organisons des opérations de nettoyage.<br />
                  Initiatives durables : Nous promouvons l'agriculture biologique et la consommation responsable.<br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='bloc-donate' id='donate'>
          <div class="container">
            <div class="row">
              <div class="col">
                <h3 class="title-donate">Faire un don</h3>
                <p>
                  Soutenez notre cause en faisant un don,
                  contribuez au changement et impactez des vies et à préserver l'environnement.
                </p>
              </div>
              <div class="col">
                <h3 class="title-donate">Acheter des produits maraichers</h3>
                <p>
                  Soutenez notre association en achetant des légumes et produits maraîchers frais.
                  Cultivés localement et dans le respect de l’environnement, nos produits contribuent à une alimentation saine et à un projet social durable.
                </p>
              </div>
              <div class="col">
                <h3 class="title-donate">Devenir bénévole ?</h3>
                <p>
                  Rejoignez notre équipe de bénévoles engagés.
                  Ensemble, nous pouvons faire une différence significative dans les vies des autres.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='bloc-blog' id='blog'>
          <div class="container">
            <div class="row">
              <div class="col">
                <h2 class="title-blog">Notre blog d'activités</h2>
                <p>
                  Découvrez notre blog, source d'informations pour approfondir
                  notre engagement en faveur de l'aide, de la solidarité internationale
                  et de la protection de l'environnement.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div>
                  <a href="single.html" class="blog-img"></a>
                  <h2><a href="single.html">Nos récoltes de cette saison</a></h2>
                  <p class="blog-description"><span class="mr-2">20 Juin 2023</span> By <a href="single.html" class="by">Didi</a></p>
                  <p>Explorez comment investir dans notre association peut créer un impact significatif et transformer des vies, en devenant un moteur de changement positif.</p>
                  <p><a href="single.html">Commencer</a></p>
                </div>
              </div>
              <div class="col">
                <div>
                  <a href="single.html" class="blog-img"></a>
                  <h2><a href="single.html">Comment devenir bénévole à VICE TOGO</a></h2>
                  <p class="blog-description"><span class="mr-2">5 Fevrier 2024</span> By <a href="single.html" class="by">James Cooper</a></p>
                  <p>Apprenez comment devenir volontaire au sein de VICE TOGO et contribuez activement à notre mission d'aide et de solidarité, en faisant une différence concrète dans la vie des personnes que nous soutenons.</p>
                  <p><a href="single.html">Voir plus</a></p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div classname="bloc-contact" id="contact">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2 className="text-black">Contactez-nous</h2>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <form action="#" method="post">
                  <div className="form-group row">
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Nom" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="Prénom(s)"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Adresse mail"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col">
                      <textarea name="" id="" className="form-control"
                        placeholder="Ecrivez votre message"
                        cols={30}
                        rows={10}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col">
                      <input type="submit" className="btn" defaultValue="Envoyez"/>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <footer className='bloc-footer'>

        </footer>


      </main>

    </div>
  );
}

export default App;
