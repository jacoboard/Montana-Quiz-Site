import React, { Component } from 'react';
import Counties from './Counties/counties.jsx';
import FindCounties from './Counties/findCounties';
import Seats from './Counties/seats';
import './App.css';

class Map extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <React.Fragment>
            
              <FindCounties/>
            
          </React.Fragment>
        </header>
      </div>
    );
  }
}

export default Map;
