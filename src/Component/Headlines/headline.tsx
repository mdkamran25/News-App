import React from 'react'
import './headline.css'
import gameImage from '../../assets//game.jpg'
const Headline = () => {
  return (
    <div>
      <div id="carouselExampleInterval" className="carousel carouselHeight slide" data-bs-ride="carousel">
        <div className="carousel-inner carouselHeight">
          <div className="carousel-item active carouselHeight" data-bs-interval="2000">
            <img src={gameImage} className="d-block w-100 carouselHeight" alt="..." />
              <div className="carousel-caption carouselDescription d-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
          </div>
          <div className="carousel-item">
            <img src={gameImage} className="d-block w-100 carouselHeight" alt="..." />
              <div className="carousel-caption d-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
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
