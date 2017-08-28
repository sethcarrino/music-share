import React, { Component } from 'react';
import logo from '../logo.svg';

class NavBar extends Component {
  render() {
    return (
      <div className="jumbotron">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Play Wha?!</h2>
      </div>
    );
  }
}

export default NavBar;
