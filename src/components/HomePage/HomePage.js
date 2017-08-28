import React, { Component } from 'react';
import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <div className="HomePage-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="HomePage-intro">
          To get started, edit <code>src/HomePage.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default HomePage;