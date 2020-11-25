import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home/home.js';
import AboutMe from './About_Me/about_me.js';
import Resume from './Resume/resume.js';
import Portfolio from './Portfolio/portfolio.js';

class Pages extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
        <Router>
           <div>
              <Switch>
                <Route strict exact path="/" component={Home} />
                <Route strict exact path="/about_me" component={AboutMe} />
                  <Route strict exact path="/portfolio" component={Portfolio} />
                <Route strict exact path="/resume" component={Resume} />
              </Switch>
            </div>
        </Router>
    );
  }
}

export default Pages;
