import './App.css';
import React, { Component } from 'react';

import Qcard from '../src/components/QCards/QCard/QCard'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Qcard />
      </div>
    );
  }
}

export default App;
