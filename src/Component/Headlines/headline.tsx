import React from 'react'
import './headline.css'
import gameImage from '../../assets//game.jpg'
import useHeadlineApiHooks from '../../hooks/headlineApiHooks';
interface Source {
  id: string;
  name: string;
}

interface Article {
  author: string | null;
  content: string | null;
  description: string | null;
  publishedAt: string;
  source: Source;
  title: string;
  url: string;
  urlToImage: string | null;
}

interface ApiResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

const Headline = () => {
  const { data, error } = useHeadlineApiHooks<ApiResponse>(
    ` https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.REACT_APP_API_KEY}`
  );

  console.log("Api Data", data, error, process.env.REACT_APP_API_KEY)

  return (
    <div>
      <div id="carouselExampleInterval" className="carousel carouselHeight slide" data-bs-ride="carousel">
        <div className="carousel-inner carouselHeight">
          {data && data.articles.map((article: Article, index: Number) => (
            <div className="carousel-item active carouselHeight" data-bs-interval="2000">
              <img src={gameImage} className="d-block w-100 carouselHeight" alt="..." />
              <div className="carousel-caption carouselDescription d-block ">
                <h5 className='float-start'>First slide label</h5><br />
                <p className='float-start'>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
          ))}
          <div className="carousel-item active carouselHeight" data-bs-interval="2000">
            <img src={gameImage} className="d-block w-100 carouselHeight" alt="..." />
            <div className="carousel-caption carouselDescription d-block ">
              <h5 className=''>First slide label</h5>
              <p className='float-start'>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={gameImage} className="d-block w-100 carouselHeight" alt="..." />
            <div className="carousel-caption d-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Headline
