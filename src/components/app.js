import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import "../style/main.scss";
import Nav from "./Navbar/navbar";

import Home from './pages/home';
import KeithCyndi from './pages/Keith-Cyndi';
import Nathan from './pages/Nathan';
import Emily from './pages/Emily';
import Casey from './pages/Casey';
import Heith from './pages/Heith';
import Sena from './pages/Sena';
import Jeremy from './pages/Jeremy';
import Shanelle from './pages/Shanelle';
import Sterling from './pages/Sterling';

export default class App extends Component {


  render() {
    return (
      <Router>
        <div className='app'>
          <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/KeithCyndi" component={KeithCyndi} />
              <Route path="/Nathan" component={Nathan} />
              <Route path="/Emily" component={Emily} />
              <Route path="/Casey" component={Casey} />
              <Route path="/Heith" component={Heith} />
              <Route path="/Sena" component={Sena} />
              <Route path="/Jeremy" component={Jeremy} />
              <Route path="/Shanelle" component={Shanelle} />
              <Route path="/Sterling" component={Sterling} />
              {/* <Route path="/blog" component={HomeBlog} /> */}
            </Switch>
        </div>
      </Router>
    );
  }
}
