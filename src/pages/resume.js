import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Pdfread from '../components/pdfRead';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import "animate.css/animate.min.css";
// import Skills from '../components/skills';


class Resume extends Component {
  render() {
    return (

      <div className="container" style={{ maxWidth: "1440px", overflow: "hidden" }}>

        <Navigation />
        <main>
          <Row style={{ marginTop: "100px" }}>
            <Col md={12} lg={8}>
              <h2>Resume</h2>
              <a href={process.env.PUBLIC_URL + '/./assets/images/sergey_bolotnikov_fs_resume.pdf'} target="_blank" rel="noopener noreferrer" download><button
                type="button" id="btn2Modal">Download</button></a>
              <div className="container" style={{ maxWidth: "100%", overflow: "hidden" }}>
                <Pdfread id="scrolly-div" file={process.env.PUBLIC_URL + '/./assets/images/sergey_bolotnikov_fs_resume.pdf'} />
              </div>


              {/* <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                /> */}

            </Col>
            <Col md={12} lg={4}>
              <div style={{ textAlign: 'center' }}>
                <img
                  src={process.env.PUBLIC_URL + "/./assets/images/sergeyprofile2.png"}
                  alt="avatar"
                  style={{ height: '200px' }}
                />
              </div>

              <h2 style={{ paddingTop: '2em' }}>Sergey Bolotnikov</h2>
              <h4 style={{ color: 'grey' }}>Programmer</h4>
              <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
              <p>a full-stack developer who is driven by the unrelenting pursuit of customer-driven focus, ideals and user experience. Also known for his love of ballroom dance</p>
              <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
              <h5>Address</h5>
              <p>3040 Edwin Ave. Apt. #2G, Fort Lee, NJ 07024</p>
              <h5>Phone</h5>
              <p>(917) 916-2840</p>
              <h5>Email</h5>
              <p>sbolotnikov@sbolotnikov.com</p>
              <h5>Web</h5>
              <p>https://sbolotnikov.github.io/react-portfolio/</p>
              <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            </Col>

          </Row>
        </main>
        <Footer />
      </div>
    )
  }
}

export default Resume;