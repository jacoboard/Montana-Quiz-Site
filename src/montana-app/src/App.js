import React, { Component } from 'react';
import Counties from './componenets/counties';
import './App.css';

class App extends Component {
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

export default App;
