import React, { Component } from 'react';
import Counties from './Counties/counties.jsx';
import FindCounties from './Counties/findCounties'
import './App.css';

class Map extends Component {
  render () {
    return (
        <header className="App-header">
          <React.Fragment>
            <div id="Map_Div">
              <FindCounties/>
            </div>
          </React.Fragment>
        </header>
    );
  }
}

export default Map;