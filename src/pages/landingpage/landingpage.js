import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import "./style.css";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto', alignItems: 'center'}}>
       <div classNameName="card" id="cardGreeting">
        <img classNameName="cardImg" id="cardImage1" src="https://raw.githubusercontent.com/sbolotnikov/react-portfolio/main/images/SergeyProfile.png" alt="Sergey's Profile " width="100%" /> 
          <div classNameName="cardImgOverlay">
            <figure id="cloud">
              <p id="anim"><span className="n">H</span><span className="n">e</span><span className="n">l</span><span
                className="n">l</span><span className="n">o</span><span className="n">,</span><span className="n">
                </span><span className="n">m</span><span className="n">y</span><span className="n"> </span><span
                  className="n">n</span><span className="n">a</span><span className="n">m</span><span
                    className="n">e</span><span className="n"> </span><span className="n">i</span><span
                      className="n">s</span><span className="n"> </span><strong><span className="n">S</span><span
                        className="n">e</span><span className="n">r</span><span className="n">g</span><span
                          className="n">e</span><span className="n">y</span><span className="n">
                </span><span className="n">B</span><span className="n">o</span><span className="n">l</span><span
                  className="n">o</span><span className="n">t</span><span className="n">n</span><span
                    className="n">i</span><span className="n">k</span><span className="n">o</span><span
                      className="n">v</span></strong><span><span className="n">.</span><br/><span className="n"></span>
                        <span className="n">I</span><span className="n"> </span><span className="n">a</span><span
                          className="n">m</span><span className="n"> </span><span className="n">a</span><span className="n"> </span><span className="n">f</span><span className="n">u</span><span className="n">l</span><span
                          className="n">l</span><span className="n">-</span><span className="n">s</span><span
                            className="n">t</span><span className="n">a</span><span className="n">c</span><span
                              className="n">k</span><span className="n"> </span><span className="n">w</span><span
                                className="n">e</span><span className="n">b</span><span className="n"> </span><span
                                  className="n">d</span><span className="n">e</span><span className="n">v</span><span
                                    className="n">e</span><span className="n">l</span><span className="n">o</span><span
                                      className="n">p</span><span className="n">e</span><span className="n">r</span><span className="n">
                        </span><span className="n">a</span><span className="n">n</span><span className="n">d</span><span
                          className="n">
                        </span><span className="n">j</span><span className="n">a</span><span className="n">v</span><span
                          className="n">a</span><span className="n">s</span><span className="n">c</span><span
                            className="n">r</span><span className="n">i</span><span className="n">p</span><span
                              className="n">t</span><span className="n"> </span><span className="n">s</span><span
                                className="n">p</span><span className="n">e</span><span className="n">c</span><span
                                  className="n">i</span><span className="n">a</span><span className="n">l</span><span
                                    className="n">i</span><span className="n">s</span><span className="n">t</span><span
                                      className="n">.</span><span className="n"></span>
                          <span className="n">F</span><span className="n">e</span><span className="n">e</span><span
                            className="n">l</span><span className="n"> </span><span className="n">f</span><span
                              className="n">r</span><span className="n">e</span><span className="n">e</span><span className="n">
                          </span><span className="n">t</span><span className="n">o</span><span className="n"> </span><span
                            className="n">t</span><span className="n">a</span><span className="n">k</span><span
                              className="n">e</span><span className="n"> </span><span className="n">a</span><span className="n">
                          </span><span className="n">l</span><span className="n">o</span><span className="n">o</span><span
                            className="n">k</span><span className="n"> </span><span className="n">a</span><span
                              className="n">t</span><span className="n"> </span><span className="n">m</span><span
                                className="n">y</span><span className="n"> </span><span className="n">l</span><span
                                  className="n">a</span><span className="n">t</span><span className="n">e</span><span
                                    className="n">s</span><span className="n">t</span><span className="n"> </span><span
                                      className="n">p</span><span className="n">r</span><span className="n">o</span><span
                                        className="n">j</span><span className="n">e</span><span className="n">c</span><span
                                          className="n">t</span><span className="n">s</span><span className="n"> </span><span
                                            className="n">o</span><span className="n">n</span><span className="n"> </span><span
                                              className="n">t</span><span className="n">h</span><span className="n">e</span><span className="n">
                          </span>
                          <a itemprop="significantLink" href="#projects" title="web portfolio"><span
                            className="n">w</span><span className="n">e</span><span className="n">b</span><span
                              className="n">
                            </span><span className="n">p</span><span className="n">o</span><span className="n">r</span><span
                              className="n">t</span><span className="n">f</span><span className="n">o</span><span
                                className="n">l</span><span className="n">i</span><span className="n">o</span><span
                                  className="n">
                            </span><span className="n">p</span><span className="n">a</span><span className="n">g</span><span
                              className="n">e</span></a><span><span className="n">.</span></span><span
                                className="n"></span>
                            <span className="n">T</span><span className="n">e</span><span className="n">l</span><span
                              className="n">.</span><span className="n">:</span><span className="n">(</span><span
                                className="n">9</span><span className="n">1</span><span className="n">7</span><span
                                  className="n">)</span><span className="n">9</span><span className="n">1</span><span
                                    className="n">6</span><span className="n">-</span><span className="n">2</span><span
                                      className="n">8</span><span className="n">4</span><span className="n">0</span><span
                                        className="n"></span><span className="n">E</span><span className="n">-</span><span
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
                                                              className="n">_</span></a></span>
              </p>
          </figure>
      </div>
  </div>
 






                
                  <Grid classNameName="landing-grid">
                    <Cell col={12}>
                      <img src="https://raw.githubusercontent.com/sbolotnikov/react-portfolio/main/images/business-05-512.png"
                        alt="avatar" classNameName="avatar-img" />

                      <div classNameName="banner-text">
                        <h1>Full Stack Web Developer</h1>

                        <hr />

                        <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

                        <div classNameName="social-links">

                          {/* LinkedIn */}
                          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i classNameName="fa fa-linkedin-square" aria-hidden="true" />
                          </a>

                          {/* Github */}
                          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i classNameName="fa fa-github-square" aria-hidden="true" />
                          </a>

                          {/* Freecodecamp */}
                          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i classNameName="fa fa-free-code-camp" aria-hidden="true" />
                          </a>

                          {/* Youtube */}
                          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i classNameName="fa fa-youtube-square" aria-hidden="true" />
                          </a>

                        </div>
                      </div>
                    </Cell>
                  </Grid>
                </div>
    )
  }
}

export default Landing;