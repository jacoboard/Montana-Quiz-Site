import React, { Component } from 'react';
import Counties from './Counties/counties';
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