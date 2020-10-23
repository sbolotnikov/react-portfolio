import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return(
        <div className="fixed-top" style={{ maxWidth: "1440px" }}>
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="row" id="Row1">
            <div className="col-12 col-sm-12 col-md-3 col-lg-3" id="Brand">
              <a title="about" href="/" className="NavA"><span style={{ color: "white" }} className="NavP">Home</span></a>
            </div>

            <div className="col-12 col-sm-12 col-md-9 col-lg-9">
              <div className="row" id="subRow">
                <div className="col-0 col-sm-0 col-md-3 col-lg-5">
                  <h6 id="SpaceTab"> dffgf</h6>
                </div>
                <div className="col-4 col-sm-4 col-md-3 col-lg-2">
                <Link to="/projects" className="NavA"><span
                    className="NavP">portfolio</span></Link> 
                </div>
                <div className="col-4 col-sm-4 col-md-3 col-lg-2">
                  <a title="contact" href="mailto:sbolotnikov@gmail.com" className="NavA"><span
                    className="NavP">contact</span></a>
                </div>
                <div className="col-4 col-sm-4 col-md-3 col-lg-3">
                <Link to="/resume" className="NavA"><span
                    className="NavP">Resume</span></Link>                 
                </div>
              </div>
            </div>
          </div>

        </div>
        <nav className="navbar navbar-dark">
          <button className="navbar-toggler" id="btnMenu" type="button" style={{ backgroundColor: "#59aaa5" }}
            data-toggle="collapse" data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    )
  }
}

export default Navigation;