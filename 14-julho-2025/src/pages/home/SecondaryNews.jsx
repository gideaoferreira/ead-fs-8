import NewFoto1 from "../../assets/images/news/news1.jpg";
import NewFoto2 from "../../assets/images/news/news2.jpg";
import NewFoto3 from "../../assets/images/news/news3.jpg";
import NewFoto4 from "../../assets/images/news/news4.jpg";
import NewsCard from "./NewsCard";

function SecondaryNews() {
  const listNews = [
    {
      title: "Card title 1",
      text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
          img: NewFoto1,
          autor: "Autor 1",
        createdAt: "01/01/2023",
    },
    {
      title: "Card title 2",
      text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
        img: NewFoto2,
        autor: "Autor 2",
        createdAt: "02/01/2023",
    },
    {
      title: "Card title 3",
      text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
        img: NewFoto3,
        autor: "Autor 3",
        createdAt: "03/01/2023",
    },
    {
      title: "Card title 4",
      text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
        img: NewFoto4,
        autor: "Autor 4",
        createdAt: "04/01/2023",
      },
        {
      title: "Card title 4",
      text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
            img: NewFoto4,
            autor: "Autor 4",
            createdAt: "04/01/2023",
    },
  ];

  return (
    <>
      <section className="mt-5 d-flex flex-wrap justify-space-around">
        {listNews.map((news, index) => (
            <NewsCard
                index={index}
                title={news.title}
                text={news.text}
                img={news.img}
                autor={news.autor}
                createdAt={news.createdAt}
            />
        ))}
      </section>
    </>
  );
}

export default SecondaryNews;
