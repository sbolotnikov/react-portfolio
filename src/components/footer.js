import React from 'react';

function Footer() {
    return (
        <footer className="footerClass">
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
            <h5>Address</h5>
            <p>3040 Edwin Ave. Apt. #2G, Fort Lee, NJ 07024</p>
            <h5>Phone</h5>
            <p>(917) 916-2840</p>
            &copy; Sergey Bolotnikov 2020
        </footer>
    )
}

export default Footer;