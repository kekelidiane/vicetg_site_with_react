import Image from "next/image";
import Link from "next/link";

function Blog() {
  const articles = [
    {
      title: "Nos récoltes de cette saison",
      slug: "recoltes-2023",
      date: "20 Juin 2023",
      author: "Diane",
      text: "Investir dans notre association peut transformer des vies.",
      image: "/assets/agro/filles.jpg",
    },
    {
      title: "Atelier d’éducation écologique",
      slug: "atelier-ecologique",
      date: "15 Mai 2023",
      author: "Marc",
      text: "Sensibiliser les jeunes à la protection de l’environnement dès le plus jeune âge.",
      image: "/assets/agro/filles.jpg",
    },
    {
      title: "Projet de reboisement communautaire",
      slug: "reboisement-communautaire",
      date: "10 Avril 2023",
      author: "Claire",
      text: "Des centaines d’arbres plantés grâce à la mobilisation locale et aux bénévoles.",
      image: "/assets/agro/filles.jpg",
    },
  ];

  return (
    <div id="blog" className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          Consultez notre blog
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Découvrez nos activités scolaires, environnementales et de
          sensibilisation.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {articles.map((article, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-56">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Texte en dessous */}
            <div className="p-6 flex flex-col flex-grow">
              <Link href={`/articles/${article.slug}`}>
                <h3 className="text-xl font-semibold text-green-700 hover:text-yellow-500 transition mb-2 cursor-pointer">
                  {article.title}
                </h3>
              </Link>
              <p className="text-sm text-yellow-500 mb-3">
                <span>{article.date}</span> par{" "}
                <span className="text-green-700">{article.author}</span>
              </p>
              <p className="text-gray-700 flex-grow">{article.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Voir plus */}
      <div className="text-center mt-12">
        <Link
          href="/articles"
          className="inline-block bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-green-800 transition"
        >
          Voir plus d'articles
        </Link>
      </div>
    </div>
  );
}

export default Blog;
