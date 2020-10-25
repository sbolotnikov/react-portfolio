import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
    const [show, setShow] = useState(true);
    return (
        <div className="fixed-top" style={{ maxWidth: "1440px", marginLeft: "auto", marginRight: "auto" }}>
            <div className={(show ? "show" : "") + " collapse"} id="navbarToggleExternalContent">
                <div className="row" id="Row1">
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3" id="Brand">
                    <Link to="/" className="NavA"><span className="NavP" style={{ color: "white" }}>Home</span></Link>
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
                    aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => {
                        if(document.querySelector(".nav-tabs")){
                        !show ? document.querySelector(".nav-tabs").style.display="none" : document.querySelector(".nav-tabs").style.display="flex";
                        }
                        setShow(!show);
                    }}>
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        </div>
    )
}

export default Navigation;