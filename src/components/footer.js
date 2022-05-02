import React from 'react';
import Table from 'react-bootstrap/Table';

function Footer() {
    return (
        <footer className="footerClass">
            <Table borderless responsive>
                <thead>
                    <tr>

                        <th colSpan="1" ><a id="facebook" className="link" href="https://www.facebook.com/bolotnikov/" target="_blank" rel="noopener noreferrer" title="Follow on Facebook">
                            <span className="fab"><i className="fa fa-facebook-official" aria-hidden="true"> Facebook</i></span>
                        </a></th>
                        <th colSpan="1"><a id="github" className="link" href="https://github.com/sbolotnikov" target="_blank" rel="noopener noreferrer" title="Follow on GitHub">
                            <span className="fab"><i className="fa fa-github" aria-hidden="true"> GitHub</i></span>
                        </a></th>
                        <th colSpan="1" ><a id="linkedin" className="link" href="https://www.linkedin.com/in/sergey-bolotnikov-10035617/" target="_blank" rel="noopener noreferrer"
                            title="Connect on Linkedin">
                            <span className="fab"><i className="fa fa-linkedin-square" aria-hidden="true"> LinkedIn</i></span>
                        </a></th>
                    </tr>
                </thead>
            </Table>

            <h5>Address</h5>
            <a className="link" href="https://www.google.com/maps/dir/40.8620033,-73.9712484/3040+Edwin+Ave,+Fort+Lee,+NJ+07024/">
                <p>3040 Edwin Ave. Apt. #2G, Fort Lee, NJ 07024</p></a>
            <h5>Phone</h5>
            <p><a className="link" href="tel:917-916-2840">(917) 916-2840</a></p>
        &copy; Sergey Bolotnikov 2020
        </footer >
    )
}

export default Footer;