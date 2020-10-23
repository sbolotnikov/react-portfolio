import React, { Fragment, useEffect } from 'react';
// import { Container, Navbar, Nav, } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'
import gsap from 'gsap'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from '../components/navigation';
var i = 0;
function ToRenderEverything() {

  useEffect(() => {
    gsap.from("#cardGreeting", { duration: 1, backgroundPosition: '-200px,0px', scale: 1.5, opacity: 0, ease: "power2.out" });
    gsap.from("#cardImage1", { duration: 2, x: 300, delay: 1, opacity: 0, ease: "power2.out" });
    gsap.from("#cloud", { duration: 2, x: 200, y: 200, opacity: 0, delay: 3, ease: "elastic" });
    gsap.from("#aside1", { duration: 1, opacity: 0, delay: 4, ease: "elastic" });
    AOS.init();
    AOS.refresh();
    var timerInterval = setInterval(function () {
      let element = document.querySelector("span.n");
      if (!element) {
        clearInterval(timerInterval);
        return }
      element.className = "";
      element.className = "glow"
      if (i > 0) {
        document.querySelector(".glow").classList.remove("glow");
      }
      i++
      if (i === 219) {
        i = 0;
        document.querySelector(".glow").classList.remove("glow");
        clearInterval(timerInterval);
      }
    }, 60);

  }, []);


  return (
    <Fragment>

      <div className="container" style={{ maxWidth: "1440px", overflow: "hidden" }}>
        <Navigation />

        <main>
          <div className="card" id="cardGreeting" style={{ alignItems: "center" }}>
            <img className="card-img" id="cardImage1" src="./assets/images/SergeyProfile.png"
              alt="Sergey's Profile" width="100%" />
            <div className="card-img-overlay">
              <figure id="cloud">
                <p id="anim"><span className="n">H</span><span className="n">e</span><span className="n">l</span><span
                  className="n">l</span><span className="n">o</span><span className="n">,</span><span className="n"> </span>
                  <span className="n">m</span><span className="n">y</span><span className="n"> </span><span
                    className="n">n</span><span className="n">a</span><span className="n">m</span><span
                      className="n">e</span><span className="n"> </span><span className="n">i</span><span
                        className="n">s</span><span className="n"> </span><strong><span className="n">S</span><span
                          className="n">e</span><span className="n">r</span><span className="n">g</span><span
                            className="n">e</span><span className="n">y</span><span className="n"> </span>
                    <span className="n">B</span><span className="n">o</span><span className="n">l</span><span
                      className="n">o</span><span className="n">t</span><span className="n">n</span><span
                        className="n">i</span><span className="n">k</span><span className="n">o</span><span
                          className="n">v</span></strong><span><span className="n">.</span><span className="n"><br /></span>
                    <span className="n">I</span><span className="n"> </span><span className="n">a</span><span
                      className="n">m</span><span className="n"> </span><span className="n">a</span><span className="n"> </span>
                    <span className="n">f</span><span className="n">u</span><span className="n">l</span><span
                      className="n">l</span><span className="n">-</span><span className="n">s</span><span
                        className="n">t</span><span className="n">a</span><span className="n">c</span><span
                          className="n">k</span><span className="n"> </span><span className="n">w</span><span
                            className="n">e</span><span className="n">b</span><span className="n"> </span><span
                              className="n">d</span><span className="n">e</span><span className="n">v</span><span
                                className="n">e</span><span className="n">l</span><span className="n">o</span><span
                                  className="n">p</span><span className="n">e</span><span className="n">r</span><span className="n"> </span>
                    <span className="n">a</span><span className="n">n</span><span className="n">d</span><span className="n"> </span>
                    <span className="n">j</span><span className="n">a</span><span className="n">v</span><span
                      className="n">a</span><span className="n">s</span><span className="n">c</span><span
                        className="n">r</span><span className="n">i</span><span className="n">p</span><span
                          className="n">t</span><span className="n"> </span><span className="n">s</span><span
                            className="n">p</span><span className="n">e</span><span className="n">c</span><span
                              className="n">i</span><span className="n">a</span><span className="n">l</span><span
                                className="n">i</span><span className="n">s</span><span className="n">t</span><span
                                  className="n">.</span><span className="n"><br /></span>
                    <span className="n">F</span><span className="n">e</span><span className="n">e</span><span
                      className="n">l</span><span className="n"> </span><span className="n">f</span><span
                        className="n">r</span><span className="n">e</span><span className="n">e</span><span className="n"> </span>
                    <span className="n">t</span><span className="n">o</span><span className="n"> </span><span
                      className="n">t</span><span className="n">a</span><span className="n">k</span><span
                        className="n">e</span><span className="n"> </span><span className="n">a</span><span className="n"> </span>
                    <span className="n">l</span><span className="n">o</span><span className="n">o</span><span
                      className="n">k</span><span className="n"> </span><span className="n">a</span><span
                        className="n">t</span><span className="n"> </span><span className="n">m</span><span
                          className="n">y</span><span className="n"> </span><span className="n">l</span><span
                            className="n">a</span><span className="n">t</span><span className="n">e</span><span
                              className="n">s</span><span className="n">t</span><span className="n"> </span><span
                                className="n">p</span><span className="n">r</span><span className="n">o</span><span
                                  className="n">j</span><span className="n">e</span><span className="n">c</span><span
                                    className="n">t</span><span className="n">s</span><span className="n"> </span><span
                                      className="n">o</span><span className="n">n</span><span className="n"> </span><span
                                        className="n">t</span><span className="n">h</span><span className="n">e</span><span className="n"> </span>
                    <a itemProp="significantLink" href="#projects" title="web portfolio"><span
                      className="n">w</span><span className="n">e</span><span className="n">b</span><span className="n"> </span>
                      <span className="n">p</span><span className="n">o</span><span className="n">r</span><span
                        className="n">t</span><span className="n">f</span><span className="n">o</span><span
                          className="n">l</span><span className="n">i</span><span className="n">o</span><span
                            className="n"> </span>
                      <span className="n">p</span><span className="n">a</span><span className="n">g</span><span
                        className="n">e</span></a><span><span className="n">.</span></span><span
                          className="n"><br /></span>
                    <span className="n">T</span><span className="n">e</span><span className="n">l</span><span
                      className="n">.</span><span className="n">:</span><span className="n">(</span><span
                        className="n">9</span><span className="n">1</span><span className="n">7</span><span
                          className="n">)</span><span className="n">9</span><span className="n">1</span><span
                            className="n">6</span><span className="n">-</span><span className="n">2</span><span
                              className="n">8</span><span className="n">4</span><span className="n">0</span><span
                                className="n"><br /></span><span className="n">E</span><span className="n">-</span><span
                                  className="n">M</span><span className="n">a</span><span className="n">i</span><span
                                    className="n">l</span><span className="n">:</span><span className="n"></span><a
                                      title="Contact Email" href="mailto:sbolotnikov@gmail.com"><span
                                        className="n">s</span><span className="n">b</span><span className="n">o</span><span
                                          className="n">l</span><span className="n">o</span><span className="n">t</span><span
                                            className="n">n</span><span className="n">i</span><span className="n">k</span><span
                                              className="n">o</span><span className="n">v</span><span className="n">@</span><span
                                                className="n">g</span><span className="n">m</span><span className="n">a</span><span
                                                  className="n">i</span><span className="n">l</span><span className="n">.</span><span
                                                    className="n">c</span><span className="n">o</span><span className="n">m</span><span
                                                      className="n">_</span></a>
                  </span>
                </p>
              </figure>
            </div>
          </div>

          <section id="projects" className="sec2">

            <figure id="HeaderContainer">
              <h2 className="head1" style={{ margin: "10px 10px 10px 45px" }}>Portfolio</h2>
            </figure>
            <h3 className="head1" style={{ margin: "10px 10px 10px 45px" }}>Full-stack Projects</h3>

            <section className="card app">

              <Carousel data-aos="fade-right" data-aos-offset="300" data-aos-duration="500">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          >
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src="./assets/images/MMASchool/desktop-login.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <p className="portfolioLabel">Front page on desktop with Google sign in option</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src="./assets/images/MMASchool/chat.jpg"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <p className="portfolioLabel">Special Studio Chat named KICKS</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src="./assets/images/MMASchool/signingToClass.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <p className="portfolioLabel">Signing to class as a student</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src="./assets/images/MMASchool/teacherProfile.jpg"
                    alt="Forth slide"
                  />
                  <Carousel.Caption>
                    <p className="portfolioLabel">Teacher's Profile check who is present</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>

              <figure className="description" data-aos="fade-left" data-aos-offset="300" data-aos-duration="500" >
                <a className="link" href="https://guarded-hamlet-46204.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <h3 className="head1 link">Full-stack MMA School</h3>
                </a>
                <a className="link" href="https://github.com/mc4506/martial-art-school-management" target="_blank" rel="noopener noreferrer">
                  <p className="head1 link">Link to GitHub depository</p>
                </a>
                <p>Full Stack MMA School is an application for creating and managing classNamees
                for a martial arts school. Instructors are able to log in and create classNamees
                based on user skill level and preference for in-person or virtual lessons,
                and coordinate className size if constraints are required by local health ordinances.
                Students and instructors can also post messages and communicate with each other
                through the platform.
                        </p>
              </figure>
            </section>
            <section className="card app">
              <Carousel data-aos="fade-left" data-aos-offset="300" data-aos-duration="500">
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src="./assets/images/Burger/img1.png"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <p className="portfolioLabel">Desktop version Form and Ready section</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src="./assets/images/Burger/img2.png"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <p className="portfolioLabel">Desktop version Ready and Devoured section</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>

              <figure className="description" data-aos="fade-right" data-aos-offset="300" data-aos-duration="500" >
                <a className="link" href="https://boiling-badlands-26235.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <h3 className="head1">Eat Da Burger </h3>
                </a>
                <a className="link" href="https://github.com/sbolotnikov/Eat_Da_Burger" target="_blank" rel="noopener noreferrer">
                  <p className="head1">Link to GitHub depository</p>
                </a>
                <p>Eat Da Burger! is a restaurant app that lets users input the names of burgers they'd like
                to eat.
                Whenever a user submits a burger's name, app will display the burger on the top part of
                the page
                -- waiting to be devoured.
                Each burger in the waiting area also has a `Eat Me!` button. When the user clicks it,
                the burger will move to the lower portion of the page.
                App will store every burger in a database, whether devoured or not.
                Burger also has delete button to erase it from the database.
                Image of the burger provided by running pexel API if there is no image it display
                default image.
                        </p>
              </figure>
            </section>
            <section className="card app">
            <Carousel data-aos="fade-right" data-aos-offset="300" data-aos-duration="500">
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src="./assets/images/Team-Info-Chart/results.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <p className="portfolioLabel">finished team roster results</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src="./assets/images/Team-Info-Chart/dataInput.png"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <p className="portfolioLabel">Input Data CLI style</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>

              <figure className="description" data-aos="fade-left">
                <a className="link" href="https://youtu.be/mlQAWMMPP2w" target="_blank" rel="noopener noreferrer">
                  <h3 className="head1">CLI App: Team Information Chart</h3>
                </a>
                <a className="link" href="https://github.com/sbolotnikov/team-info-chart" target="_blank" rel="noopener noreferrer">
                  <p className="head1">Link to GitHub depository</p>
                </a>
                <p>When the user has completed building the team,the application will create
                an HTML file that displays a nicely formatted team roster based on the information
                            provided by the user. (For instructional video click on the heading)</p>
              </figure>
            </section>
            <h3 className="head1" style={{ margin: "10px 10px 10px 45px" }}>Front-end Projects</h3>
            <section className="card app">

            <Carousel data-aos="fade-right" data-aos-offset="300" data-aos-duration="500">
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src="./assets/images/Dinner/2-restaurant-search-results.png"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <p className="portfolioLabel">restaurant search results</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src="./assets/images/Dinner/4-dish-search-results.png"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <p className="portfolioLabel">results of search for specific dish</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src="./assets/images/Dinner/5-details-on-recipe.png"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <p className="portfolioLabel">detailed look ingridients&how-to recipe</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <figure className="description" data-aos="fade-left">
                <a className="link" href="https://andrewdalba.github.io/what-is-for-dinner/" target="_blank" rel="noopener noreferrer">
                  <h3 className="head1">APP: What's For Dinner?</h3>
                </a>
                <a className="link" href="https://github.com/andrewdalba/what-is-for-dinner" target="_blank" rel="noopener noreferrer">
                  <p className="head1">Link to GitHub depository</p>
                </a>
                <p>A helpful application to locate restaurants, find recipes, and recipe videos based on the
                            users food preferences and location.</p>
              </figure>

            </section>
            <section className="card app">

            <Carousel data-aos="fade-right" data-aos-offset="300" data-aos-duration="500">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          >
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src="./assets/images/Weather/4-list-of-maps-used-switchto-Celsious.png"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <p className="portfolioLabel">List of maps displayed from openweathermap API using
                                        leaflet API and openstreetmap tiles and switching to Celsious</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src="./assets/images/Weather/5-diffrent-city-click.png"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <p className="portfolioLabel">You can choose diffrent city also it change
                                        background from rapidapi API</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src="./assets/images/Weather/5-diffrent-city-click.png"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <p className="portfolioLabel">Click on the city to find out weather</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src="./assets/images/Weather/8-iPAD-look.png"
                    alt="Forth slide"
                  />
                  <Carousel.Caption>
                    <p className="portfolioLabel">App on Iphone, IPad</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <figure className="description" data-aos="fade-right">
                <a className="link" href="https://sbolotnikov.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer">
                  <h3 className="head1">Weather-Dashboard</h3>
                </a>
                <a className="link" href="https://github.com/sbolotnikov/weather-dashboard" target="_blank" rel="noopener noreferrer">
                  <p className="head1">Link to GitHub depository</p>
                </a>
                <p>An interactive weather application that displays the forecast in a stylish fashion and
                stores
                            the user's previously searched locations.</p>
              </figure>
            </section>
            <section className="card app">

            <Carousel data-aos="fade-right" data-aos-offset="300" data-aos-duration="500">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          >
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src="./assets/images/Portfolio/animation.gif"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <p className="portfolioLabel">animation of about section </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src="./assets/images/Portfolio/portfolio.gif"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <p className="portfolioLabel">portfoio section overview</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <figure className="description" data-aos="fade-left">
                <a className="link" href="https://sbolotnikov.github.io/Responsive-Portfolio/" target="_blank" rel="noopener noreferrer">
                  <h3 className="head1">Responsive Portfolio</h3>
                </a>
                <a className="link" href="https://github.com/sbolotnikov/Responsive-Portfolio" target="_blank" rel="noopener noreferrer">
                  <p className="head1">Link to GitHub depository</p>
                </a>
                <p> My responsive portfolio</p>
              </figure>
            </section>
            <section className="card app">
            <Carousel data-aos="fade-right" data-aos-offset="300" data-aos-duration="500">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          >
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src="./assets/images/Calendar/4-click-to-edit-on description.png"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <p className="portfolioLabel">Overall App look. To Edit click the appointment bar</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src="./assets/images/Calendar/5-edit-apptmt-view.png"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <p className="portfolioLabel">Edit/Add appointment view</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src="./assets/images/Calendar/6-click-to-erase.png"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <p className="portfolioLabel">Click to erase button</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src="./assets/images/Calendar/7-erased.png"
                    alt="Forth slide"
                  />
                  <Carousel.Caption>
                    <p className="portfolioLabel">Erase result view</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              
              
              <figure className="description" data-aos="fade-right">
                <a className="link" href="https://sbolotnikov.github.io/Day-planner/" target="_blank" rel="noopener noreferrer">
                  <h3 className="head1">Day Planner</h3>
                </a>
                <a className="link" href="https://github.com/sbolotnikov/Day-planner" target="_blank" rel="noopener noreferrer">
                  <p className="head1">Link to GitHub depository</p>
                </a>
                <p>A simple calendar application that allows the user to save events for each hour of the
                day.
                        </p>
              </figure>
            </section>
            <section className="card app">
            <Carousel data-aos="fade-right" data-aos-offset="300" data-aos-duration="500">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          >
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src="./assets/images/Quiz/1-start-panel.png"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <p className="portfolioLabel">Start up panel</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src="./assets/images/Quiz/3-example-of-the-response-to-user-input.png"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <p className="portfolioLabel">App interract with customer on user's input</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src="./assets/images/Quiz/5-display-of-the-stored-results.png"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <p className="portfolioLabel">Results are stored and sorted</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src="./assets/images/Quiz/6-detailed-look-of-the-individual-results.png"
                    alt="Forth slide"
                  />
                  <Carousel.Caption>
                    <p className="portfolioLabel">Individual details of each test</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            
              <figure className="description" data-aos="fade-left">
                <a className="link" href="https://sbolotnikov.github.io/Code-Quiz/" target="_blank" rel="noopener noreferrer">
                  <h3 className="head1">Code Quiz</h3>
                </a>
                <a className="link" href="https://github.com/sbolotnikov/Code-Quiz" target="_blank" rel="noopener noreferrer">
                  <p className="head1">Link to GitHub depository</p>
                </a>
                <p>Multiple Choice Quiz
                A timed quiz. Time is deducted for selecting incorrect answers. Save and sort previous
                results. Gives details of the user's answers
                        </p>
              </figure>
            </section>
            <section className="card app">
               
            <Carousel data-aos="fade-right" data-aos-offset="300" data-aos-duration="500">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          >
                <Carousel.Item >
                  <img
                    className="d-block w-100"
                    src="./assets/images/Password/Prompts.png"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <p className="portfolioLabel">series of prompts asked </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src="./assets/images/Password/result.png"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <p className="portfolioLabel" >provide result</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>

              <figure className="description" data-aos="fade-right">
                <a className="link" href="https://sbolotnikov.github.io/javascript-password-generator/" target="_blank" rel="noopener noreferrer">
                  <h3 className="head1">Password Generator</h3>
                </a>
                <a className="link" href="https://github.com/sbolotnikov/javascript-password-generator" target="_blank" rel="noopener noreferrer">
                  <p className="head1">Link to GitHub depository</p>
                </a>
                <p>A simple application that generates unique passwords based on perameters set by the user.
                        </p>
              </figure>
            </section>
          </section>

          <aside id="aside1" className="follow-me">
            <p id="labelLink">Social media:</p>
            <a id="facebook" href="https://www.facebook.com/bolotnikov/" target="_blank" rel="noopener noreferrer" title="Follow on Facebook">
              <span className="fab"><i className="fa fa-facebook-official" aria-hidden="true"></i></span>
            </a>
            <a id="github" href="https://github.com/sbolotnikov" target="_blank" rel="noopener noreferrer" title="Follow on GitHub">
              <span className="fab"><i className="fa fa-github" aria-hidden="true"></i></span>
            </a>
            <a id="linkedin" href="https://www.linkedin.com/in/sergey-bolotnikov-10035617/" target="_blank" rel="noopener noreferrer"
              title="Connect on Linkedin">
              <span className="fab"><i className="fa fa-linkedin-square" aria-hidden="true"></i></span>
            </a>

          </aside>
        </main>

        <footer className="footerclassName">
          &copy; Sergey Bolotnikov 2020
        </footer>
      </div>
    </Fragment>
  )
}

export default ToRenderEverything;