import React from 'react';
import '../style/Portfolio.css'
import play from '../assets/4play.png';
import gglass from '../assets/google-glass.png';
import loveIsBlur from '../assets/loveIsBlur.png'
import textEditor from '../assets/TextEditor.png'
import newbie from '../assets/newbieBay.png'
import weather from '../assets/weather.png'



export default function Portfolio() {
  return (

    <div className="portfolio-container">
      <h2>In order to check the live deployment, please click on the picture</h2>

      {/*############################################## Second Block line ################################# */}

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
                <a href="https://github.com/luizborges146/Gameproject" className="btn btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>

          {/*############################################## Second image added ################################# */}

          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <a href="https://love-is-blur.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img
                src={loveIsBlur}
                className="card-img-top"
                alt="Love is Blur"
              /></a>
              <div className="card-body">
                <h5 className="card-title">Love is Blur</h5>
                <p className="card-text">
                Our dating app is all about prioritizing values over looks. Instead of basing decisions on appearances.Whether you're looking for a long-term relationship or just looking to meet new people, give our app a try and see the difference for yourself!
                </p>
                <a href="https://github.com/luizborges146/love-is-blur" className="btn btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>

          {/*############################################## Third image added ################################# */}

          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
               <a href="https://darxmarx.github.io/california-bay-area-guide/" target="_blank" rel="noopener noreferrer">
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

      {/*############################################## Second Block line ################################# */}


      <div className="portfolio-card">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
               <a href="https://luizborges146.github.io/weather-forecast/" target="_blank" rel="noopener noreferrer">
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
          {/*############################################## Second image added ################################# */}
          <div className="col-lg-4 d-none d-lg-block">
            <div className="card">
              <a href="https://young-meadow-84288.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img
                src={textEditor}
                className="card-img-top"
                alt="Sunset Over the Sea"
              /></a>
              <div className="card-body">
                <h5 className="card-title">Snippet Cheatsheet</h5>
                <p className="card-text">
                The idea of this application is to be able to manipulate the data using React. With that in mind, the user can choose from Create, Read, Update and Delete the text. the application save the information in the web browser, so even if you close it accidentally, once you reopen it, it will work again.
                </p>
                <a href="https://github.com/luizborges146/textEditor" className="btn btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>

          {/*############################################## Third image added ################################# */}

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

