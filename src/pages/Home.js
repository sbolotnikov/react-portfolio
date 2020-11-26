import React, { Fragment, useEffect } from 'react';
import gsap from 'gsap';
import "animate.css/animate.min.css";
import { Animated } from "react-animated-css";
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import Typewriter from '../components/typewriter';
import Typewriter2 from '../components/typewriter2';
import projects from "../utils/projects.json";
import ProjectTag from '../components/ProjectTag';
import { Textfit } from 'react-textfit';
var i = 0;
function ToRenderEverything() {

  useEffect(() => {
    gsap.from("#cloud", { duration: 2, x: 200, y: 200, opacity: 0, delay: 3, ease: "elastic" });
    var timerIntervalbefore = setInterval(function () {
      var timerInterval = setInterval(function () {
        let element = document.querySelector("span.n");
        if (!element) {
          clearInterval(timerInterval);
          clearInterval(timerIntervalbefore);
          return
        }
        element.className = "";
        element.className = "glow"
        if (i > 0) {
          document.querySelector(".glow").classList.remove("glow");
        }
        i++
        if (i === 227) {
          document.querySelector(".glow").classList.remove("glow");
        }
      }, 60);
    }, 4000);
  }, []);


  let hight = window.innerHeight;
  let width = window.innerWidth;
  console.log(hight)
  // 1120/1483 *hight*.4     `;

  return (
    <Fragment>


      <main className="container" style={{ maxWidth: "1280px", overflow: "hidden" }}>
        <Navigation />
        <div className="container">
          <div id='cardGreeting' className="jumbotron jumbotron-fluid bg-transparent">

            <div className="d-flex text-dark align-middle justify-content-center">

              <img
                src={process.env.PUBLIC_URL + "/./assets/images/office.jpg"}
                alt="avatar" id="smScreenBg" style={{ height: `${hight}px` }}
              />
              
              <Animated animationIn="fadeInRightBig" animationOut="fadeOut" animationInDuration={2000}   isVisible={true}>
                <img id="cardImage1" src={process.env.PUBLIC_URL + "/./assets/images/sergeyprofile.png"}
                  style={{ borderColor: "transparent", height: "70vh", zIndex:'-1' }} alt="Sergey's Profile" />

              </Animated>
              
              <figure id="cloud" className={"d-flex flex-column justify-content-center text-center position-absolute"} style={{width: (hight>width) ?'95vw': (width>650) && (hight>400) ? '40vw':'80vw'}}>
              <Typewriter2 text='WELCOME TO UNIMATRIX' />
                <Textfit mode="multi">
                  <Typewriter text='Hello, My name is ' /><strong><Typewriter text='Sergey Bolotnikov.' /></strong>
                  <br /> <Typewriter text='I am a full-stack web developer and' />
                  <br /> <Typewriter text='javascript specialist. Technologies:' />
                  <br /><strong><Typewriter text=' HTML/CSS | Bootstrap | JavaScript' />
                    <br /><Typewriter text='React | NodeJS | Express | MongoDB' /></strong><br />
                  <a className="link" style={{ textColor: "black" }} href="tel:917-916-2840"><strong><Typewriter text='Tel.:(917)916-2840.' /></strong></a>
                  <a className="link" title="Contact Email" href="mailto:sbolotnikov@gmail.com"><strong><Typewriter text='EMail:sbolotnikov@gmail.com' /></strong></a>
                  <Typewriter text='My networks:' />
                  <a id="facebook" href="https://www.facebook.com/bolotnikov/" target="_blank" rel="noopener noreferrer" title="Follow on Facebook">
                    <span className="n fab"><i className="fa fa-facebook-official" aria-hidden="true"></i></span>
                  </a>
                  <a id="github" href="https://github.com/sbolotnikov" target="_blank" rel="noopener noreferrer" title="Follow on GitHub">
                    <span className="n fab"><i className="fa fa-github" aria-hidden="true"></i></span>
                  </a>
                  <a id="linkedin" href="https://www.linkedin.com/in/sergey-bolotnikov-10035617/" target="_blank" rel="noopener noreferrer"
                    title="Connect on Linkedin">
                    <span className="n fab"><i className="fa fa-linkedin-square" aria-hidden="true"></i></span>
                  </a>
                </Textfit>
              </figure>

            </div>

          </div>

          <section id="projects" style={{ top: `${hight + 50}px`, left: "0px" }} className="sec2">
            <figure id="HeaderContainer">
              <h2 className="head1" style={{ margin: "10px 10px 10px 45px" }}>Portfolio</h2>
            </figure>
            <h3 className="head1" style={{ margin: "10px 10px 10px 45px" }}>Featured Projects</h3>


            {projects.filter(item => item.featured).map((item, i) => <ProjectTag {...item} num={i} key={"item-" + i} />)}


            <Footer />
          </section>
        </div>
      </main>


    </Fragment >
  )
}

export default ToRenderEverything;