import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Pdfread from '../components/pdfRead';
import Navigation from '../components/navigation';
// import Experience from '../components/experience';
// import Skills from '../components/skills';


class Resume extends Component {
  render() {
    return (
      <div>
        <Container >
          
            <Navigation />
          
          <Row>
            <Col xs={4}>
              <div style={{ textAlign: 'center' }}>
                <img
                  src="./assets/images/SergeyProfile2.png"
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
              <p>mywebsite.com</p>
              <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            </Col>
            <Col className="resume-right-col" xs={8}>
              <h2>Resume</h2>
              <Pdfread file='./assets/images/Sergey_Bolotnikov_FS_Resume.pdf' />

              <a href="./assets/images/Sergey_Bolotnikov_FS_Resume.pdf" target="_blank" download><button
                type="button" id="btn2Modal">Download</button></a>

              {/* <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      /> */}


            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Resume;