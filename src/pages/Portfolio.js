import React from 'react';
import '../style/Portfolio.css'
import play from '../assets/4play.png';
import gglass from '../assets/google-glass.png';
import seo from '../assets/seo.png'
import snippetcheat from '../assets/snippet-cheatsheet.png'
import newbie from '../assets/newbieBay.png'
import weather from '../assets/weather.png'



export default function Portfolio() {
  return (

    <div className="portfolio-container">
      <div className="portfolio-card">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <a href="https://fp-4play.herokuapp.com/0" target="_blank" rel="noopener noreferrer">
              <img
                src={play}
                className="card-img-top"
                alt="4Play website"
              /></a>
              <div className="card-body">
                <h5 className="card-title">4Play</h5>
                <p className="card-text">
                We developed the 4Play fullstack web application for users that has a passion for video games. The website allows the user to create an account, check game information, create comments about the games and also, search games by game name, genres and category.
                </p>
                <a href="https://github.com/luizborges146/california-bay-area-guide" className="btn btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <a href="https://fp-4play.herokuapp.com/0" target="_blank" rel="noopener noreferrer">
              <img
                src={seo}
                className="card-img-top"
                alt="SEO website"
              /></a>
              <div className="card-body">
                <h5 className="card-title">SEO</h5>
                <p className="card-text">
                Web accessibility is an increasingly important consideration for businesses. It ensures that people with disabilities can access a website using assistive technologies such as video captions, screen readers, and braille keyboards
                </p>
                <a href="#!" className="btn btn-primary">GitHub</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
               <a href="https://github.com/luizborges146/california-bay-area-guide" target="_blank" rel="noopener noreferrer">
              <img
                src={newbie}
                className="card-img-top"
                alt="NewbieBay"
              /></a>
              <div className="card-body">
                <h5 className="card-title">NewbieBay</h5>
                <p className="card-text">
                A handy, intuitive website that grants users a number of resources suited for life in California's bay area, utilizing multiple API calls to supplement well-crafted HTML and CSS elements.
                </p>
                <a href="https://github.com/luizborges146/california-bay-area-guide" className="btn btn-primary">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-card">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
               <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer">
                <img
                src={weather}
                className="card-img-top"
                alt="Waterfall"
              /></a>
              <div className="card-body">
                <h5 className="card-title">Weather forecast</h5>
                <p className="card-text">
                This is a weather dashboard to show the user the current weather for a specific location. It also display the weather for the next 5 days forecast, easy display and also user friendly layout.
                </p>
                <a href="https://github.com/luizborges146/weather-forecast" target="_blank" rel="noopener noreferrer"className="btn btn-primary">GitHub</a>
              </div>
            </div>
          </div>
          {/* ##############################################################################add it as a comment in the system #########################################################################################*/}
          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer">
              <img
                src={snippetcheat}
                className="card-img-top"
                alt="Sunset Over the Sea"
              /></a>
              <div className="card-body">
                <h5 className="card-title">Snippet Cheatsheet</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" className="btn btn-primary">GitHub</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <a href="https://github.com/luizborges146/google-glass" target="_blank" rel="noopener noreferrer">
              <img
                src={gglass}
                className="card-img-top"
                alt="Sunset over the Sea"
              /></a>
              <div className="card-body">
                <h5 className="card-title">Google Glass</h5>
                <p className="card-text">
                  The idea of this website is to show the users the advantage of buying a google glass and also the technologies. This website what built mostly using HTML CSS and JS. The website is not yet complete, still working on it.
                </p>
                <a href="https://github.com/luizborges146/google-glass" target="_blank" rel="noopener noreferrer"className="btn btn-primary">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

