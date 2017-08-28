import React, { Component } from 'react';
import logo from '../logo.svg';

class NavBar extends Component {
  render() {
    return (
      <div className="jumbotron title-bg">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="title">React Music Share</h2>
      </div>
    );
  }
}

export default NavBar;
