import React, { useState } from 'react';
import './headline.css';
import gameImage from '../../assets//game.jpg';
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

// TextTruncate component
const TextTruncate: React.FC<{ content: string }> = ({ content }) => {
  const ellipsisIndex = content.indexOf('[');
  const truncatedContent = ellipsisIndex !== -1 ? content.slice(0, ellipsisIndex-1) : content;
  const remainingContent = ellipsisIndex !== -1 ? content.slice(ellipsisIndex) : '';

  return (
    <div>
      {truncatedContent}
      {remainingContent && (
        <>
          {'Read More'}
        </>
      )}
    </div>
  );
};

const Headline: React.FC = () => {
  const { data, error } = useHeadlineApiHooks<ApiResponse>(
    ` https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.REACT_APP_API_KEY}`
  );

  console.log("Api Data", data, error, process.env.REACT_APP_API_KEY);

  return (
    <div>
      <div id="carouselExampleInterval" className="carousel carouselHeight slide" data-bs-ride="carousel">
        <div className="carousel-inner carouselHeight">
          {data && data.articles.map((article: Article, index: number) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}  carouselHeight`} data-bs-interval="2000" key={index}>
              <img src={article.urlToImage ? article.urlToImage : gameImage} className="d-block w-100 carouselHeight" alt="..." />
              <div className="carousel-caption carouselDescription d-block z-1">
                <h5 className='text-start pb-1 mb-0'>{article.title ? article.title : "Sorry there is some error in api"}</h5>
                <p className='text-start headlineContentLink'>
                  {article.content ? (
                    <>  
                      <a className='text-decoration-none text-light' href={article.url ? article.url : "#"}><TextTruncate content={article.content} /></a>
                    </>
                  ) : (
                    "Sorry there is some error in api"
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className='topHeadlines py-1 ps-2 pe-3'>Top Headlines</p>
        <button className="carousel-control-prev z-0" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next z-0" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Headline;
