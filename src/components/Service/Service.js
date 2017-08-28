import React, { Component } from 'react';
import './Service.css';

class Service extends Component {
  render() {
    return (
      <div className="Service">
        <div className="Service-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="Service-intro">
          To get started, edit <code>src/Service.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Service;