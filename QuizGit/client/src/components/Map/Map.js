import React, { Component } from 'react';
import Counties from './Counties/counties';
import FindCounties from './Counties/findCounties';
import Seats from './Counties/seats';
import License from './Counties/licensePlate';
import './App.css';

class Map extends Component {
  render () {
    return (
        <header className="App-header">
          <React.Fragment>
            <div id="Map_Div">
              <Counties/>
            </div>
          </React.Fragment>
        </header>
    );
  }
}

export default Map;