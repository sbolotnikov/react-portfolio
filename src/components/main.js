  
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from '../pages/landingpage/landingpage';
import AboutMe from '../pages/aboutme';
import Contact from './contact';
import Projects from '../pages/projects';
import Resume from '../pages/resume';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;