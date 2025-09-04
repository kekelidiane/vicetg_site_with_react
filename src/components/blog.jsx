function Blog() {
  return (
    <div className='bloc-blog' id='blog'>
      <div className="container"> 
        <div className="row">
          <div className="col">
            <h2 className="title-blog">Notre blog d'activités</h2>
            <p>
              Découvrez notre blog : informations sur la solidarité internationale
              et la protection de l'environnement.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h3><a href="single.html">Nos récoltes de cette saison</a></h3>
            <p className="blog-description"><span>20 Juin 2023</span> By <a href="single.html">Didi</a></p>
            <p>Investir dans notre association peut transformer des vies.</p>
          </div>

          <div className="col">
            <h3><a href="single.html">Comment devenir bénévole à VICE TOGO</a></h3>
            <p className="blog-description"><span>5 Février 2024</span> By <a href="single.html">James Cooper</a></p>
            <p>Découvrez comment devenir volontaire et aider concrètement.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
