import React, { Fragment, useEffect } from 'react';
import gsap from 'gsap';
import "animate.css/animate.min.css";
import Navigation from '../components/navigation';
import Typewriter from '../components/typewriter';
import projects from "../utils/projects.json";
import ProjectTag from '../components/ProjectTag';
var i = 0;
function ToRenderEverything() {

  useEffect(() => {
    gsap.from("#cardGreeting", { duration: 1, backgroundPosition: '-200px,0px', scale: 1.5, opacity: 0, ease: "power2.out" });
    gsap.from("#cardImage1", { duration: 2, x: 300, delay: 1, opacity: 0, ease: "power2.out" });
    gsap.from("#cloud", { duration: 2, x: 200, y: 200, opacity: 0, delay: 3, ease: "elastic" });
    gsap.from("#aside1", { duration: 1, opacity: 0, delay: 4, ease: "elastic" });
    var timerInterval = setInterval(function () {
      let element = document.querySelector("span.n");
      if (!element) {
        clearInterval(timerInterval);
        return
      }
      element.className = "";
      element.className = "glow"
      if (i > 0) {
        // console.log(i, "  ", element.innerHTML)
        document.querySelector(".glow").classList.remove("glow");
      }
      i++
      if (i === 228) {
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
              alt="Sergey's Profile" height="80%" />
            <div className="card-img-overlay">
              <figure id="cloud">

                <p id="anim"><Typewriter text='Hello, My name is ' /><strong><Typewriter text='Sergey Bolotnikov.' /></strong>
                  <br /> <Typewriter text='I am a full-stack web developer and javascript specialist.' />
                  <br /><strong><Typewriter text=' HTML/CSS | Bootstrap | JavaScript | React ' />
                    <br /><Typewriter text=' NodeJS | Express | MongoDB ' /></strong>
                  <br /><Typewriter text='Tel.:(917)916-2840. ' />
                  <Typewriter text='E-Mail:' />
                  <a title="Contact Email" href="mailto:sbolotnikov@gmail.com"><Typewriter text='sbolotnikov@gmail.com' /></a>
                  <br /><Typewriter text='My networks:' /> 
                  <span className="n"><a id="facebook" href="https://www.facebook.com/bolotnikov/" target="_blank" rel="noopener noreferrer" title="Follow on Facebook">
                      <span className="fab"><i className="fa fa-facebook-official" aria-hidden="true"></i></span>
                    </a></span>
                    <span className="n"><a id="github" href="https://github.com/sbolotnikov" target="_blank" rel="noopener noreferrer" title="Follow on GitHub">
                      <span className="fab"><i className="fa fa-github" aria-hidden="true"></i></span>
                    </a></span>
                    <span className="n"> <a id="linkedin" href="https://www.linkedin.com/in/sergey-bolotnikov-10035617/" target="_blank" rel="noopener noreferrer"
                      title="Connect on Linkedin">
                      <span className="fab"><i className="fa fa-linkedin-square" aria-hidden="true"></i></span>
                    </a></span>
                </p>
              </figure>
            </div>
          </div>
          <section id="projects" className="sec2">
            <figure id="HeaderContainer">
              <h2 className="head1" style={{ margin: "10px 10px 10px 45px" }}>Portfolio</h2>
            </figure>
            <h3 className="head1" style={{ margin: "10px 10px 10px 45px" }}>Featured Projects</h3>

            
              { projects.filter(item =>item.featured).map((item, i) => <ProjectTag {...item} key={"item-" + i} />)}
            

           
          </section>

        </main>

                <footer className="footerclassName">
                  &copy; Sergey Bolotnikov 2020
        </footer>
      </div>
    </Fragment >
  )
}

export default ToRenderEverything;