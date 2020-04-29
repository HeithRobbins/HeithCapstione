import React, { Component } from 'react';

import NavigationComponent from "./Navbar/navbar"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavigationComponent />
        <h1>DevCamp React Starter</h1>
        <h2>React Redux Router</h2>
      </div>
    );
  }
}
