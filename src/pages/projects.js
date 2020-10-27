import React, { useState } from 'react';
import Navigation from '../components/navigation';
import { Tabs, Tab } from 'react-bootstrap';
import projects from "../utils/projects.json";
import ProjectTag from '../components/ProjectTag';

function ControlledTabs() {
  const [key, setKey] = useState('fullStack');

  return (

    <div className="container" style={{ maxWidth: "1440px", overflow: "hidden" }}>
      <Navigation />
      <Tabs className="fixed-top"
        activeKey={key}
        onSelect={(k) => setKey(k)}>
        <Tab eventKey="fullStack" title="Full Stack">
          {projects.filter(item => (item.type === "Full Stack")).map((item, i) => <ProjectTag {...item} key={"item-" + i} />)}
        </Tab>
        <Tab eventKey="frontEnd" title="Front End">
          {projects.filter(item => (item.type === "Front End")).map((item, i) => <ProjectTag {...item} key={"item-" + i} />)}
        </Tab>
        <Tab eventKey="backEnd" title="Back End">
          {projects.filter(item => (item.type === "Back End")).map((item, i) => <ProjectTag {...item} key={"item-" + i} />)}
        </Tab>
      </Tabs>

    </div>
  )
}


export default ControlledTabs;