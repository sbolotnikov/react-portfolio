import React, { Component } from 'react';
import { Col, Row, ProgressBar} from 'react-bootstrap';

class Skills extends Component {
  render() {
    return(
      <Row  style={{display: 'flex'}}>
        <Col xs={12}>
          <div>{this.props.skill} - {this.props.progress}%</div>
        </Col>
        <Col xs={12}>
          <div> <ProgressBar style={{margin: 0, width: '75%'}} now={this.props.progress} label={`${this.props.progress}%`} srOnly /></div>
        </Col>
      </Row>
    )
  }
}

export default Skills;