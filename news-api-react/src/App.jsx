import { useEffect, useState } from "react"

function App() {
  const [listNews, setListNews] = useState([])
  const url = 'https://hemocentrosunidos.org.br/wp-json/wp/v2/noticias?_embed&per_page=5&page=1'

  function fetchNews() {
    fetch(url)
      .then(response => response.json())
      .then(response => setListNews(response))
  }

  useEffect(() => {
    fetchNews()
  },[])

  return (
    <>
      <div className="d-flex p-3 gap-3 container flex-wrap">
        {listNews.map((news, index) => {
        return (
            <div className="card card-width" key={index}>
              <h3 className="p-2">{news.title.rendered}</h3>
              <div className="d-flex justify-content-between p-2">
                <small>Autor: Hemocentros Unidos </small>
                <small>{new Date(news.date).toLocaleDateString()} : {new Date(news.date).toLocaleTimeString()}</small>
              </div>
              <img src={news._embedded['wp:featuredmedia'][0].source_url} alt="" />
              <span className="p-2" dangerouslySetInnerHTML={{ __html: `${news.content.rendered.substring(0, 300)}... LEIA MAIS `}}></span> 
            </div>
        )
      })}
      </div>
    </>
  )
}

export default App
