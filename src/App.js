
import React from 'react';
import "./css/style.css";
import "./css/about_style.css";
import Home from "./pages/Home";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import {HashRouter as Router, Route} from 'react-router-dom';

function App() {
    return (
      <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
      </Router>
    </div>




       
      //   <Main />
      // </Container>



    );
  }


export default App;
