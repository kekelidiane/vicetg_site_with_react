function About() {
  return (
    <div className='bloc-about' id='about'>
      <div className='description'>
        <p>
          L'Association VICE-TOGO se consacre à soutenir les enfants les plus
          démunis à travers l'éducation, tout en promouvant la consommation et
          l'agriculture biologiques, ainsi que le reboisement.
          <br />
          Vous pouvez soutenir notre association en faisant un don, en devenant bénévole ou
          en partageant notre cause avec votre entourage.
        </p>
      </div>

      <div className="bloc-actions">
        <div>
          <h2>ACTIONS EDUCATIFS</h2>
          <p>
            Soutien scolaire : Vice Togo s'occupe de l'éducation des enfants... <br />
            Divertissements : Des séances d'animations sont organisées tous les weekends<br />
            Protection contre le paludisme : sensibilisation dans les villages pour
            lutter de manière naturelle avec moustiquaires imprégnés<br />
          </p>
        </div>

        <div>
          <h2>ACTIONS ENVIRONNEMENTAUX</h2>
          <p>
            Maraîchage... <br />
            Reboisement : plantation d'arbres chaque année<br />
            Sensibilisation : ateliers et événements durables<br />
            Gestion des déchets : systèmes de gestion et nettoyages<br />
            Initiatives durables : agriculture biologique<br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
