import React from 'react'
import './categorieWiseNews.css'
import advertisement from "../../assets/advertisement.jpg"
import Location from '../Location/location'
import useHeadlineApiHooks from '../../hooks/headlineApiHooks'
interface categorieProps {
  categorie: string
}

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
const CategoriesWiseNews: React.FC<categorieProps> = (props) => {

  const { data, error } = useHeadlineApiHooks<ApiResponse>(
    `https://newsapi.org/v2/top-headlines?country=in&category=${props.categorie}&apiKey=${process.env.REACT_APP_API_KEY}`
  );

  const text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quia odio amet atque velit temporibus quae exercitationem nemo saepe ex cum, vel minus facere accusamus. Ea sapiente nobis sed pariatur.';

  const [isTruncated, setIsTruncated] = React.useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div>
      <div className='row g-0 d-flex flex-row'>
        <div className='col-6 ps-2 align-middle'>
          <p className='float-start align-middle text-dark my-2 text-capitalize'>{props.categorie}</p>
        </div>
        <div className='LocationWrapper float-end col-6'>
          <Location />
        </div>
      </div>
      <hr className='custom-hr bg-dark' />
  
      <div className='categorieWiseNewsCustomHeight'>
        {data && data.articles.map((article: Article, index: number) => (
          <React.Fragment key={index}>
            <div className='row g-0 p-2'>
              <div className='col-2'>
                <img className='float-start ps-1' src={article.urlToImage ? article.urlToImage : advertisement} width={60} height={80} alt='News image' />
              </div>
              <div className='col-9 homePageCategoriewiseNewsDescription'>
                <p className={`text-start ${isTruncated ? 'truncate-text' : ''}`}>
                  {isTruncated ? `${article.title.slice(0, 80)}...` : article.title}
                  {isTruncated && (
                    <a href={article.url} onClick={toggleTruncate}>
                      Read more
                    </a>
                  )}
                </p>
              </div>
            </div>
            <hr className='mt-0' />
          </React.Fragment>
        ))}
      </div>
      <div className='col-12'>
        <hr className='mt-0 mb-1' />
        <a href='#'>Read More &rarr;</a>
      </div>
    </div>
  )
 }
                  
export default CategoriesWiseNews
