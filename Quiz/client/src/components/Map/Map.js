import React, { Component } from 'react';
import Counties from './Counties/counties.jsx';
import './App.css';

class Map extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <React.Fragment>
            <main>
              <Counties/>
            </main>
          </React.Fragment>
        </header>
      </div>
    );
  }
}

export default Map; 